/** Prefix a public-folder path with Vite's deploy base (e.g. /website-testing/). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
