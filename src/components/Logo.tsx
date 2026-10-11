/* eslint-disable @next/next/no-img-element */

type Variant = "header" | "footer" | "icon";

// Intrinsic sizes of the files in public/new-logo (kept so the layout doesn't shift while they load).
const SIZES: Record<Variant, { width: number; height: number }> = {
  header: { width: 721, height: 96 },
  footer: { width: 704, height: 144 },
  icon: { width: 119, height: 128 },
};

/** CodeLove logo. Swaps between the light and dark artwork with the site theme. */
export default function Logo({
  variant = "header",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const { width, height } = SIZES[variant];
  const alt = "CodeLove";
  return (
    <>
      <img
        src={`/new-logo/codelove-${variant}-on-light.png`}
        alt={alt}
        width={width}
        height={height}
        className={`w-auto dark:hidden ${className}`}
      />
      <img
        src={`/new-logo/codelove-${variant}-on-dark.png`}
        alt={alt}
        width={width}
        height={height}
        className={`hidden w-auto dark:block ${className}`}
      />
    </>
  );
}
