/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages (anjali-ruprela.github.io — root user site)
  output: "export",
  // GitHub Pages has no image-optimization server, so serve images as-is
  images: { unoptimized: true },
};

export default nextConfig;
