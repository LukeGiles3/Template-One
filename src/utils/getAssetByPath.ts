const assetModules = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
});

export function getAssetByPath(path: string) {
  const asset = assetModules[`../assets/${path}`];

  if (!asset) {
    throw new Error(`Asset not found for path: ${path}`);
  }

  return asset;
}
