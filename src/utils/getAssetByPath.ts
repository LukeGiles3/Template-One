import type { ImageMetadata } from "astro";

const assetModules = import.meta.glob<ImageMetadata>("../assets/**/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
});

export function getAssetByPath(path: string): ImageMetadata {
  const asset = assetModules[`../assets/${path}`];

  if (!asset) {
    throw new Error(`Asset not found for path: ${path}`);
  }

  return asset;
}
