/**
 * Ensures that a path is absolute (starts with '/') and provides a fallback for undefined paths
 * @param path - The path to process
 * @param fallback - Optional fallback path if the input is undefined (defaults to '/placeholder.jpg')
 * @returns The processed path
 */
export const ensureAbsolutePath = (path: string | undefined, fallback: string = '/placeholder.jpg') => {
  if (!path) return fallback;
  return path.startsWith('/') ? path : `/${path}`;
};
