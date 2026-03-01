// Greek letter abbreviations for IFC chapters (Greek — English). Keys match chapter.txt / chapters.json (alphabetical).
export const chapterGreek = {
  'Alpha Epsilon Pi': 'ΑΕΠ',
  'Alpha Tau Omega': 'ΑΤΩ',
  'Beta Theta Pi': 'ΒΘΠ',
  'Chi Phi': 'ΧΦ',
  'Chi Psi': 'ΧΨ',
  'Delta Kappa Epsilon': 'ΔΚΕ',
  'Delta Sigma Phi': 'ΔΣΦ',
  'Delta Upsilon': 'ΔΥ',
  'Phi Delta Theta': 'ΦΔΘ',
  'Phi Kappa Psi': 'ΦΚΨ',
  'Phi Sigma Kappa': 'ΦΣΚ',
  'Phi Society': 'Φ',
  'Pi Kappa Phi': 'ΠΚΦ',
  'Pi Lambda Phi': 'ΠΛΦ',
  'Sigma Alpha Epsilon': 'ΣΑΕ',
  'Sigma Alpha Mu': 'ΣΑΜ',
  'Sigma Chi': 'ΣΧ',
  'Sigma Nu': 'ΣΝ',
  'Sigma Phi (SERP)': 'ΣΦ',
  'Sigma Phi': 'ΣΦ',
  'Sigma Pi': 'ΣΠ',
  'St. Anthony Hall': 'ΔΨ',
  'St Anthony Hall': 'ΔΨ',
  'St. Elmo Hall': 'ΔΦ',
  'St Elmo Hall': 'ΔΦ',
  'Theta Chi': 'ΘΧ',
  'Theta Delta Chi': 'ΘΔΧ',
  'Zeta Psi': 'ΖΨ',
};

export function getGreekForChapter(name) {
  return chapterGreek[name] || name;
}
