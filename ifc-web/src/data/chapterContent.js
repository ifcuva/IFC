/**
 * Chapter-specific content: image, details list, description, and links.
 * Key by chapter name (as in chapters.json). Add entries here as you have content.
 */
export const chapterImages = {
  'Alpha Epsilon Pi': '/images/aepichapter.png',
};

export const chapterContent = {
  'Alpha Epsilon Pi': {
    subtitle: 'Virginia Mu Chapter',
    image: 'public/images/aepichapter.png',
    details: [
      { label: 'President', value: 'Zachary Minkin', href: '#' },
      { label: 'Date founded at University of Virginia', value: 'November 29, 1924' },
      { label: 'Chapter Size as of Spring 2026', value: '70' },
      { label: 'Philanthropy', value: 'UVA Heart Family Fund' },
      { label: 'Philanthropy Chair', value: 'Samuel Bromberg', href: '#' },
      { label: 'Alumni Chair', value: 'William Silver', href: '#' },
      { label: 'Rush Chairs', value: 'Eric Brown and Josh Kelner', href: '#' },
    ],
    paragraphs: [
      'Founded in 1924, the Mu chapter of Alpha Epsilon Pi is committed to academic excellence, improving the community through service and leadership, and creating lifelong friendships. Our brothers have various academic pursuits and are involved in several activities throughout the University and Charlottesville community. We continually achieve high academic standards, maintaining the highest average GPA across all Greek Life for three consecutive semesters. Our philanthropic endeavors raise thousands of dollars each semester. All proceeds go to the UVA Heart Family Fund, a fund established to help meet the financial needs of families with children at the UVA Children\'s Hospital Heart Center.',
      'Current brothers are leaders on grounds, exemplifying the involvement and passion AEPi brothers hold to make UVA a better place. Organizations such as TAMID, the Brody Jewish Center, the Engineering Student Council, Remote Area Medical (RAM), McIntire Investment Institute (MII), and Cavalier Daily are all led by the AEPi brothers. We continue strengthening our relations in the university community through various outreach efforts and welcome any alumni to stop by our chapter house, reminisce, and meet our brothers.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://aepimu.com/' },
      { label: 'National Website', href: 'https://aepi.org' },
    ],
  },
};

export function getChapterImage(name) {
  return chapterImages[name] || null;
}

export function getChapterContent(name) {
  return chapterContent[name] || null;
}
