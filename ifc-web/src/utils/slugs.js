/**
 * Convert chapter name to URL slug and back.
 */
export function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[.'']/g, '')
    .replace(/\./g, '');
}

export function slugToName(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
