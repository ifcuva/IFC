/**
 * Convert chapter name to URL slug and back.
 * Canonical list matches chapter.txt so slugToName returns exact display names (e.g. Sigma Phi (SERP)).
 */
const CHAPTER_NAMES = [
  'Alpha Epsilon Pi', 'Alpha Tau Omega', 'Beta Theta Pi',
  'Chi Phi', 'Chi Psi', 'Delta Kappa Epsilon', 'Delta Sigma Phi', 'Delta Upsilon',
  'Phi Delta Theta', 'Phi Kappa Psi', 'Phi Sigma Kappa', 'Phi Society',
  'Pi Kappa Phi', 'Pi Lambda Phi', 'Sigma Alpha Epsilon', 'Sigma Alpha Mu',
  'Sigma Chi', 'Sigma Nu', 'Sigma Phi (SERP)', 'Sigma Pi',
  'St. Anthony Hall', 'St. Elmo Hall', 'Theta Chi', 'Theta Delta Chi', 'Zeta Psi',
];

export function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[.'']/g, '')
    .replace(/\./g, '')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

export function slugToName(slug) {
  const normalized = slug.toLowerCase().trim();
  const match = CHAPTER_NAMES.find((n) => nameToSlug(n) === normalized);
  if (match) return match;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Old site used URLs like /chapters/βθπ-beta-theta-pi/ (Greek + hyphen + name).
 * Returns the canonical slug (e.g. "beta-theta-pi") when the given slug is in that
 * old format, so we can redirect and resolve content correctly.
 */
export function getCanonicalChapterSlug(slug) {
  if (!slug || typeof slug !== 'string') return slug;
  const normalized = slug.toLowerCase().trim();
  if (CHAPTER_NAMES.some((n) => nameToSlug(n) === normalized)) return normalized;
  const afterFirstHyphen = normalized.split('-').slice(1).join('-');
  if (afterFirstHyphen && CHAPTER_NAMES.some((n) => nameToSlug(n) === afterFirstHyphen)) return afterFirstHyphen;
  return normalized;
}
