import os
import cv2
import numpy as np
from PIL import Image, ImageDraw

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    src_path = os.path.join(base_dir, "public", "Codelove-New-Logo.png")
    out_dir = os.path.join(base_dir, "public", "new-logo")
    os.makedirs(out_dir, exist_ok=True)

    print("Loading source image:", src_path)
    img_orig = Image.open(src_path)
    w_orig, h_orig = img_orig.size

    # --- Step 1: Replace slashes '/' with vertical bars '|' in the tagline without blurring any other letters ---
    # The descender of 'p' in 'Apps' extends down to y=788! So we use bounds y: 740 to 792.
    img_fixed = img_orig.copy()
    fixed_arr = np.array(img_fixed)

    # Clear only the 3 slashes cleanly in fixed_arr
    fixed_arr[740:790, 510:538] = 0
    fixed_arr[740:790, 728:756] = 0
    fixed_arr[740:790, 992:1020] = 0

    img_fixed = Image.fromarray(fixed_arr)

    # Draw vertical bars locally using supersampled patch so no other text is affected
    for cx in [523.0, 742.5, 1006.5]:
        x0, x1 = int(cx - 20), int(cx + 20)
        y0, y1 = 740, 790
        patch = img_fixed.crop((x0, y0, x1, y1))
        scale = 4
        p_hi = patch.resize((patch.width * scale, patch.height * scale), Image.Resampling.BICUBIC)
        d = ImageDraw.Draw(p_hi)

        local_cx = (cx - x0) * scale
        local_ytop = (745 - y0) * scale
        local_ybot = (780 - y0) * scale
        line_w = 4.2 * scale

        d.line([(local_cx, local_ytop), (local_cx, local_ybot)], fill=(255, 255, 255), width=int(round(line_w)))
        r = line_w / 2.0
        d.ellipse([local_cx - r, local_ytop - r, local_cx + r, local_ytop + r], fill=(255, 255, 255))
        d.ellipse([local_cx - r, local_ybot - r, local_cx + r, local_ybot + r], fill=(255, 255, 255))

        p_final = p_hi.resize((patch.width, patch.height), Image.Resampling.LANCZOS)
        img_fixed.paste(p_final, (x0, y0))

    img_fixed.save(os.path.join(out_dir, "codelove-logo-square-dark.png"))
    print("Saved codelove-logo-square-dark.png (Apps fully preserved)")

    # --- Step 2: Unblend from black helper for clean transparency ---
    def unblend_from_black(rgb_img, light_mode=False):
        arr = np.array(rgb_img, dtype=np.float32)
        # Blue mask: high B, low R
        is_blue = (arr[:, :, 2] > 1.3 * arr[:, :, 0]) & (arr[:, :, 2] > 35)

        rgba = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)

        # White foreground unblending
        max_c = np.max(arr, axis=2)
        alpha_white = np.clip(max_c / 255.0, 0, 1)

        # Blue foreground unblending
        alpha_blue = np.clip(arr[:, :, 2] / 254.0, 0, 1)

        alpha = np.where(is_blue, alpha_blue, alpha_white)

        if light_mode:
            blue_col = np.array([31, 89, 254], dtype=np.uint8)
            dark_col = np.array([15, 23, 42], dtype=np.uint8)
            final_rgb = np.where(is_blue[:, :, None], blue_col, dark_col)
        else:
            blue_col = np.array([31, 89, 254], dtype=np.uint8)
            white_col = np.array([255, 255, 255], dtype=np.uint8)
            final_rgb = np.where(is_blue[:, :, None], blue_col, white_col)

        rgba[:, :, :3] = np.uint8(final_rgb)
        rgba[:, :, 3] = np.uint8(np.clip(alpha * 255.0, 0, 255))
        rgba[rgba[:, :, 3] < 8, 3] = 0
        return Image.fromarray(rgba, "RGBA")

    # Save square transparent logo
    img_square_transparent = unblend_from_black(img_fixed)
    img_square_transparent.save(os.path.join(out_dir, "codelove-logo-square-transparent.png"))
    print("Saved codelove-logo-square-transparent.png")

    # --- Step 3: Extract the C-Heart Icon ---
    icon_crop_rgb = img_orig.crop((607, 220, 908, 543))
    icon_crop_rgba = unblend_from_black(icon_crop_rgb)

    master_size = 1024
    target_icon_h = int(master_size * 0.78)
    target_icon_w = int(round(icon_crop_rgb.width * (target_icon_h / icon_crop_rgb.height)))

    icon_resized_rgba = icon_crop_rgba.resize((target_icon_w, target_icon_h), Image.Resampling.LANCZOS)

    # Master Transparent Icon
    master_transparent = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
    pos_x = (master_size - target_icon_w) // 2
    pos_y = (master_size - target_icon_h) // 2
    master_transparent.paste(icon_resized_rgba, (pos_x, pos_y), icon_resized_rgba)
    master_transparent.save(os.path.join(out_dir, "c-heart-icon-transparent.png"))
    master_transparent.save(os.path.join(out_dir, "icon-1024x1024.png"))

    # Master Dark Solid Icon (#000000)
    master_dark = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 255))
    master_dark.paste(icon_resized_rgba, (pos_x, pos_y), icon_resized_rgba)
    master_dark.save(os.path.join(out_dir, "c-heart-icon-dark.png"))

    # Master Squircle Icon
    corner_r = int(master_size * 0.22)
    mask = Image.new("L", (master_size, master_size), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.rounded_rectangle([(0, 0), (master_size, master_size)], radius=corner_r, fill=255)

    master_squircle = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
    dark_bg_layer = Image.new("RGBA", (master_size, master_size), (10, 14, 23, 255))
    dark_bg_layer.paste(icon_resized_rgba, (pos_x, pos_y), icon_resized_rgba)
    master_squircle.paste(dark_bg_layer, (0, 0), mask)
    master_squircle.save(os.path.join(out_dir, "c-heart-icon-squircle.png"))

    # --- Step 4: Favicon Sizes ---
    sizes = [
        (16, "favicon-16x16.png"),
        (32, "favicon-32x32.png"),
        (48, "favicon-48x48.png"),
        (64, "favicon-64x64.png"),
        (96, "favicon-96x96.png"),
        (128, "favicon-128x128.png"),
        (180, "apple-touch-icon.png"),
        (192, "android-chrome-192x192.png"),
        (256, "icon-256x256.png"),
        (384, "icon-384x384.png"),
        (512, "android-chrome-512x512.png"),
    ]

    for sz, filename in sizes:
        if sz == 180:
            img_sz = master_dark.resize((sz, sz), Image.Resampling.LANCZOS)
            img_sz.save(os.path.join(out_dir, filename))
            img_sz_trans = master_transparent.resize((sz, sz), Image.Resampling.LANCZOS)
            img_sz_trans.save(os.path.join(out_dir, "apple-touch-icon-transparent.png"))
        elif sz in (192, 512):
            img_dark = master_dark.resize((sz, sz), Image.Resampling.LANCZOS)
            img_dark.save(os.path.join(out_dir, filename))
            img_trans = master_transparent.resize((sz, sz), Image.Resampling.LANCZOS)
            img_trans.save(os.path.join(out_dir, filename.replace(".png", "-transparent.png")))
        else:
            img_sz = master_transparent.resize((sz, sz), Image.Resampling.LANCZOS)
            img_sz.save(os.path.join(out_dir, filename))
            img_dark = master_dark.resize((sz, sz), Image.Resampling.LANCZOS)
            img_dark.save(os.path.join(out_dir, filename.replace(".png", "-dark.png")))

    ico_32 = master_transparent.resize((32, 32), Image.Resampling.LANCZOS)
    ico_32.save(
        os.path.join(out_dir, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    ico_dark_32 = master_dark.resize((32, 32), Image.Resampling.LANCZOS)
    ico_dark_32.save(
        os.path.join(out_dir, "favicon-dark.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    # --- Step 5: Compose Landscape Logo (Apps fully preserved) ---
    # Crop Title: codelove.in
    title_crop = img_orig.crop((360, 580, 1175, 702))

    # Crop Tagline with full y-bounds 742 to 792 (preserves p descenders in Apps completely!)
    tagline_crop = img_fixed.crop((360, 742, 1175, 792))

    gap_lines = 38
    text_w = max(title_crop.width, tagline_crop.width)
    text_h = title_crop.height + gap_lines + tagline_crop.height

    text_canvas_rgb = Image.new("RGB", (text_w, text_h), (0, 0, 0))
    text_canvas_rgb.paste(title_crop, (0, 0))
    text_canvas_rgb.paste(tagline_crop, (0, title_crop.height + gap_lines))

    icon_landscape_h = 220
    icon_landscape_w = int(round(icon_crop_rgb.width * (icon_landscape_h / icon_crop_rgb.height)))
    icon_landscape_rgb = icon_crop_rgb.resize((icon_landscape_w, icon_landscape_h), Image.Resampling.LANCZOS)

    pad_x = 70
    pad_y = 50
    spacing = 55
    total_w = pad_x * 2 + icon_landscape_w + spacing + text_w
    total_h = pad_y * 2 + max(icon_landscape_h, text_h)

    # 5a. Landscape Dark
    landscape_dark = Image.new("RGB", (total_w, total_h), (0, 0, 0))
    pos_icon_y = pad_y + (max(icon_landscape_h, text_h) - icon_landscape_h) // 2
    pos_text_y = pad_y + (max(icon_landscape_h, text_h) - text_h) // 2
    landscape_dark.paste(icon_landscape_rgb, (pad_x, pos_icon_y))
    landscape_dark.paste(text_canvas_rgb, (pad_x + icon_landscape_w + spacing, pos_text_y))
    landscape_dark.save(os.path.join(out_dir, "codelove-landscape-dark.png"))

    # 5b. Landscape Transparent
    landscape_trans = unblend_from_black(landscape_dark, light_mode=False)
    landscape_trans.save(os.path.join(out_dir, "codelove-landscape-transparent.png"))

    # 5c. Landscape Light Mode
    landscape_light = unblend_from_black(landscape_dark, light_mode=True)
    landscape_light.save(os.path.join(out_dir, "codelove-landscape-light.png"))

    # 5d. Medium-size landscape versions (800px width)
    med_w = 800
    med_h = int(round(total_h * (med_w / total_w)))
    landscape_dark.resize((med_w, med_h), Image.Resampling.LANCZOS).save(
        os.path.join(out_dir, "codelove-landscape-dark-medium.png")
    )
    landscape_trans.resize((med_w, med_h), Image.Resampling.LANCZOS).save(
        os.path.join(out_dir, "codelove-landscape-transparent-medium.png")
    )

    # 5e. Compact Landscape (Icon + codelove.in only, no tagline)
    comp_icon_h = 130
    comp_icon_w = int(round(icon_crop_rgb.width * (comp_icon_h / icon_crop_rgb.height)))
    comp_icon_rgb = icon_crop_rgb.resize((comp_icon_w, comp_icon_h), Image.Resampling.LANCZOS)

    comp_pad_x = 50
    comp_pad_y = 35
    comp_spacing = 40
    comp_total_w = comp_pad_x * 2 + comp_icon_w + comp_spacing + title_crop.width
    comp_total_h = comp_pad_y * 2 + max(comp_icon_h, title_crop.height)

    comp_dark = Image.new("RGB", (comp_total_w, comp_total_h), (0, 0, 0))
    c_icon_y = comp_pad_y + (max(comp_icon_h, title_crop.height) - comp_icon_h) // 2
    c_title_y = comp_pad_y + (max(comp_icon_h, title_crop.height) - title_crop.height) // 2
    comp_dark.paste(comp_icon_rgb, (comp_pad_x, c_icon_y))
    comp_dark.paste(title_crop, (comp_pad_x + comp_icon_w + comp_spacing, c_title_y))
    comp_dark.save(os.path.join(out_dir, "codelove-landscape-compact-dark.png"))

    comp_trans = unblend_from_black(comp_dark, light_mode=False)
    comp_trans.save(os.path.join(out_dir, "codelove-landscape-compact-transparent.png"))

    print("Successfully regenerated all assets with fixed Apps!")

if __name__ == "__main__":
    main()
