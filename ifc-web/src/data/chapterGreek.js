// Greek letter abbreviations for IFC chapters (Greek — English)
export const chapterGreek = {
  'Alpha Epsilon Pi': 'ΑΕΠ',
  'Alpha Tau Omega': 'ΑΤΩ',
  'Delta Kappa Epsilon': 'ΔΚΕ',
  'Delta Upsilon': 'ΔΥ',
  'St. Anthony Hall': 'ΔΨ',
  'St Anthony Hall': 'ΔΨ',
  'Theta Chi': 'ΘΧ',
  'Theta Delta Chi': 'ΘΔΧ',
  'Pi Kappa Phi': 'ΠΚΦ',
  'Sigma Alpha Epsilon': 'ΣΑΕ',
  'Sigma Nu': 'ΣΝ',
  'Sigma Phi': 'ΣΦ',
  'Sigma Chi': 'ΣΧ',
  'Phi Delta Theta': 'ΦΔΘ',
  'Phi Sigma Kappa': 'ΦΣΚ',
  'Chi Phi': 'ΧΦ',
  'Beta Theta Pi': 'ΒΘΠ',
  'Delta Sigma Phi': 'ΔΣΦ',
  'St. Elmo Hall': 'ΔΦ',
  'St Elmo Hall': 'ΔΦ',
  'Zeta Psi': 'ΖΨ',
  'Pi Lambda Phi': 'ΠΛΦ',
  'Sigma Alpha Mu': 'ΣΑΜ',
  'Sigma Pi': 'ΣΠ',
  'Sigma Phi Epsilon': 'ΣΦΕ',
  'Phi Kappa Psi': 'ΦΚΨ',
};

export function getGreekForChapter(name) {
  return chapterGreek[name] || name;
}
