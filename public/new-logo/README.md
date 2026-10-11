# CodeLove New Logo & Favicon Assets Pack

All logo and favicon assets generated from the official `Codelove-New-Logo.png` branding.
Original real image is preserved intact at `public/Codelove-New-Logo.png`.

---

## 📁 Folder Contents Overview

### 1. 🌟 Landscape Logos (For Footer, Header & Banners)
*Horizontal layout with Logo Icon on the left and typography on the right (`codelove.in` + `Web | Apps | Games | More`).*

- **`codelove-landscape-dark.png`**: Full landscape logo on pure black background (High-res).
- **`codelove-landscape-transparent.png`**: Full landscape logo on transparent background (Ideal for dark footers of any shade: slate, navy, charcoal, or gradients).
- **`codelove-landscape-light.png`**: Full landscape logo for light backgrounds (Dark slate typography, royal blue accents, transparent background).
- **`codelove-landscape-dark-medium.png`**: Web-optimized (800px width) version of dark landscape logo.
- **`codelove-landscape-transparent-medium.png`**: Web-optimized (800px width) version of transparent landscape logo.
- **`codelove-landscape-compact-dark.png`**: Compact horizontal logo (Icon + `codelove.in`, without tagline) on black background.
- **`codelove-landscape-compact-transparent.png`**: Compact horizontal logo on transparent background.

---

### 2. 💖 Favicon & App Icons (Only "C" with Blue Heart Symbol)
*Cleanly extracted icon mark with zero background clutter, optimized for browser tabs, bookmarks, PWAs, iOS, and Android.*

| File Name | Resolution | Background | Recommended Use |
| :--- | :--- | :--- | :--- |
| **`favicon.ico`** | 16x16, 32x32, 48x48 | Transparent | Standard multi-res favicon for all desktop browsers |
| **`favicon-dark.ico`** | 16x16, 32x32, 48x48 | Black | Dark background favicon variant |
| **`favicon-16x16.png`** | 16x16 | Transparent | Standard tab favicon (small) |
| **`favicon-32x32.png`** | 32x32 | Transparent | Retina tab favicon (standard) |
| **`favicon-48x48.png`** | 48x48 | Transparent | Browser bookmark / shortcut icon |
| **`favicon-64x64.png`** | 64x64 | Transparent | Windows tile / desktop shortcut |
| **`favicon-96x96.png`** | 96x96 | Transparent | Google TV / platform shortcut |
| **`favicon-128x128.png`** | 128x128 | Transparent | Chrome Web Store / App icon |
| **`apple-touch-icon.png`** | 180x180 | Solid Black | Apple iOS home screen icon (iOS standard) |
| **`apple-touch-icon-transparent.png`** | 180x180 | Transparent | Apple touch icon transparent variant |
| **`android-chrome-192x192.png`** | 192x192 | Solid Black | Android home screen / PWA |
| **`android-chrome-192x192-transparent.png`**| 192x192 | Transparent | Android PWA transparent variant |
| **`android-chrome-512x512.png`** | 512x512 | Solid Black | PWA splash screen & high-res app stores |
| **`android-chrome-512x512-transparent.png`**| 512x512 | Transparent | PWA splash screen transparent variant |
| **`icon-256x256.png`** | 256x256 | Transparent | Medium high-res icon |
| **`icon-384x384.png`** | 384x384 | Transparent | High-res Android icon |
| **`icon-1024x1024.png`** | 1024x1024 | Transparent | Full ultra-high resolution master icon |
| **`c-heart-icon-squircle.png`** | 1024x1024 | Modern Squircle | Premium squircle rounded app icon |
| **`c-heart-icon-transparent.png`** | 1024x1024 | Transparent | Master transparent icon |
| **`c-heart-icon-dark.png`** | 1024x1024 | Solid Black | Master black background icon |

---

### 3. 📐 Vector & Manifest Files
- **`favicon.svg`**: Scalable vector icon for modern Next.js `<link rel="icon" href="/new-logo/favicon.svg" type="image/svg+xml">`.
- **`c-heart-icon.svg`**: Vector SVG icon on black background.
- **`c-heart-icon-transparent.svg`**: Vector SVG icon on transparent background.
- **`site.webmanifest`**: Web app manifest file configured with 192x192 and 512x512 icons.

---

### 4. 🖼️ Square Logos (Real Image Layout with `|` instead of `/`)
- **`codelove-logo-square-dark.png`**: Original 1536x1024 composition with the tagline updated from `Web / Apps / Games / More` to `Web | Apps | Games | More`.
- **`codelove-logo-square-transparent.png`**: Transparent version of the square logo.

---

## 💡 Quick Code Snippets (For Future Connection)

### In Next.js `layout.tsx` (Metadata):
```tsx
export const metadata: Metadata = {
  title: 'CodeLove',
  icons: {
    icon: [
      { url: '/new-logo/favicon.ico', sizes: 'any' },
      { url: '/new-logo/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/new-logo/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/new-logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/new-logo/site.webmanifest',
};
```

### In Footer Component:
```tsx
<img 
  src="/new-logo/codelove-landscape-transparent.png" 
  alt="CodeLove Logo" 
  className="h-10 w-auto" 
/>
```
