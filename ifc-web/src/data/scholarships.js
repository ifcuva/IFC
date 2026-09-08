// Scholarship chapter info – OneDrive spreadsheet with chapter-level scholarship details
export const CHAPTER_SCHOLARSHIP_INFO_URL =
  'https://onedrive.live.com/:x:/g/personal/7da4d99c74d395ec/IQCpBXln1qGpRYC-akJ8h_sYAYu3U5wd8QkPNK-znmh-tL0?rtime=-S9iacJ33kg&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy83ZGE0ZDk5Yzc0ZDM5NWVjL0lRQ3BCWGxuMXFHcFJZQy1ha0o4aF9zWUFZdTNVNXdkOFFrUE5LLXpubWgtdEwwP2U9NWRocGQ0JndkTE9SPWM3NjcxM0ZFQS00QUY0LTg3NEEtODcxNy0zMjA4OEQ3Q0NBMEEmT1I9T3V0bG9vaw';

export const SCHOLARSHIP_CHAIR = {
  name: 'Henry Anderson',
  position: 'Membership Education and Scholarship Chair',
  email: 'egc9bw@virginia.edu',
};

// Orgs/events the IFC has supported (for Sponsorships / Funding Requests page)
export const FUNDING_SUPPORTED_ORGS = [
  { name: 'Challah for Hunger (CfH)', url: 'https://challahatuva.org/' },
  { name: 'Step Up! UVA', url: 'http://www.virginia.edu/getgrounded/stepup.html' },
  { name: 'Restoration Ball', url: 'http://www.restorationball.org/' },
  { name: 'Virginia Blood Services', url: 'http://www.vablood.org/' },
  { name: 'Pancakes for Parkinsons', url: 'http://pages.shanti.virginia.edu/Pancakes4Parkinsons/' },
  { name: 'Dance Marathon at UVA', url: 'http://dmatuva.org/' },
];

// Where the "Support IFC Scholarships" button points.
// TODO: replace with the official donation/giving link when available.
export const SCHOLARSHIP_SUPPORT_URL = `mailto:${SCHOLARSHIP_CHAIR.email}?subject=Supporting%20IFC%20Scholarships`;

// The impact of donor support (Scholarships page)
export const SCHOLARSHIP_IMPACT = [
  'For many students, the cost of fraternity membership can be a barrier to an experience that provides far more than a social community. IFC scholarships help make fraternity membership more accessible, giving recipients the opportunity to build lifelong relationships, develop professionally, find academic support, and become more involved at the University.',
  'By supporting the scholarship program, donors help ensure that financial circumstances do not prevent students from experiencing the opportunities, mentorship, and sense of belonging that fraternity membership can provide.',
];

// Recipient testimonials ("In Their Words")
export const SCHOLARSHIP_TESTIMONIALS = [
  {
    quote:
      'It has given me a chance to experience things that I never would have had to experience if not for this scholarship. I’ve gotten many opportunities to network for jobs, get better at socializing and talking with people, and overall getting me to step outside my comfort zone.',
    attribution: '3rd Year Scholarship Recipient',
  },
  {
    quote:
      'Being a part of a fraternity has positively impacted my college experience by providing me with a community and support system that has been beneficial on both a personal and professional level.',
    attribution: '2nd Year Scholarship Recipient',
  },
  {
    quote:
      'Beyond the social aspect, it’s pushed me academically and professionally. Surrounding myself with driven brothers has raised my own standards and given me a network that fosters career growth for a lifetime to come.',
    attribution: '3rd Year Scholarship Recipient',
  },
  {
    quote:
      'My fraternity gave me a sense of belonging during a time when college could have easily felt overwhelming. It introduced me to people who became some of my closest friends and gave me a support system I didn’t realize I would need so much.',
    attribution: '3rd Year Scholarship Recipient',
  },
];
