/**
 * Chapter-specific content: image, details list, description, and links.
 * Key by chapter name (as in chapters.json). Add entries here as you have content.
 */
// Chapter images live in /public/images/chapters/ as <slug>.png (e.g. alpha-epsilon-pi.png).
export const chapterImages = {
  'Alpha Epsilon Pi': '/images/chapters/alpha-epsilon-pi.png',
  'Alpha Tau Omega': '/images/chapters/alpha-tau-omega.png',
  'Beta Theta Pi': '/images/chapters/beta-theta-pi.png',
  'Delta Sigma Phi': '/images/chapters/delta-sigma-phi.png',
  'St. Elmo Hall': '/images/chapters/st-elmo-hall.png',
  'Zeta Psi': '/images/chapters/zeta-psi.png',
  'Delta Kappa Epsilon': '/images/chapters/delta-kappa-epsilon.png',
  'Delta Upsilon': '/images/chapters/delta-upsilon.png',
  'St. Anthony Hall': '/images/chapters/st-anthony-hall.png',
  'Theta Delta Chi': '/images/chapters/theta-delta-chi.png',
  'Pi Kappa Phi': '/images/chapters/pi-kappa-phi.png',
  'Sigma Alpha Epsilon': '/images/chapters/sigma-alpha-epsilon.png',
  'Sigma Nu': '/images/chapters/sigma-nu.png',
  'Sigma Phi (SERP)': '/images/chapters/sigma-phi.png',
  'Sigma Chi': '/images/chapters/sigma-chi.png',
  'Phi Delta Theta': '/images/chapters/phi-delta-theta.png',
  'Phi Sigma Kappa': '/images/chapters/phi-sigma-kappa.png',
  'Chi Phi': '/images/chapters/chi-phi.png',
  'Alpha Sigma Phi': '/images/chapters/alpha-sigma-phi.png',
  'Pi Lambda Phi': '/images/chapters/pi-lambda-phi.png',
  'Sigma Alpha Mu': '/images/chapters/sigma-alpha-mu.png',
  'Sigma Pi': '/images/chapters/sigma-pi.png',
  'Phi Kappa Psi': '/images/chapters/phi-kappa-psi.png',
  'Phi Society': '/images/chapters/phi-society.png',
  'Chi Psi': '/images/chapters/chi-psi.png',
};

export const chapterContent = {
  'Alpha Epsilon Pi': {
    subtitle: 'Mu Chapter',
    image: null,
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
  'Alpha Tau Omega': {
    subtitle: 'Delta Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Tucker Meeks', href: 'mailto:nte7vz@virginia.edu' },
      { label: 'Philanthropy', value: 'Charlottesville-Albemarle SPCA' },
      { label: 'Chapter Size as of Spring 2024', value: '14' },
      { label: 'Date founded at University of Virginia', value: 'September 11, 1868' },
      { label: 'President', value: 'Colin Fogarty', href: 'mailto:ank6rs@virginia.edu' },
    ],
    paragraphs: [
      'Founded in 1868, the University of Virginia Delta Chapter is the oldest active chapter nationwide for the Alpha Tau Omega Fraternity. The brothers of the Delta chapter uphold the ideals of leadership, academic excellence, camaraderie, and service.',
      'We are driven to better ourselves and our communities, with brothers involved in organizations such as Madison House, Student Council, Club Athletics, HackCville, Cavalier Band, and many more. With a proud heritage that has stood the test of time, we will continue to positively impact our community, both at the University of Virginia and Charlottesville, for years to come.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://aig.alumni.virginia.edu/ato/' },
      { label: 'National Website', href: 'http://www.ato.org/' },
    ],
  },
  'Beta Theta Pi': {
    subtitle: 'Omicron Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Hayden Matay', href: 'mailto:wnn9ax@virginia.edu' },
      { label: 'Alumni Chair', value: 'Oliver Andress', href: 'mailto:csg7su@virginia.edu' },
      { label: 'Philanthropy Chair', value: 'Charlie Aghdami', href: 'mailto:fhq5pa@virginia.edu' },
      { label: 'Philanthropy', value: 'UVA Childrens Hospital' },
      { label: 'Chapter Size as of Spring 2026', value: '96' },
      { label: 'Date founded at University of Virginia', value: '1855' },
      { label: 'President', value: 'Ben Marks' },
    ],
    paragraphs: [
      'Founded in 1839, Beta Theta Pi upholds the ideals of lifelong friendship, dedication to leadership, devotion to academic excellence, commitment to community service and high standards of personal conduct, as declared by our Men of Principle Initiative.',
      'The Omicron Chapter, founded at UVA in 1855, consistently achieves highly among University of Virginia fraternities. In addition to earning one of the highest average chapter GPAs year after year, members of the Omicron chapter seek active involvement throughout the entirety of the university.',
      'Members hold high degrees of campus leadership, dedicate countless hours to philanthropic service, hold positions on club athletics, and participate in a boundless array of other extracurricular activities. Brothers of Beta Theta Pi at UVA strive to be well-rounded and high-achieving members in all that they do, inside the fraternity and out.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://www.virginiabeta.org/' },
      { label: 'National Website', href: 'http://www.betathetapi.org/' },
    ],
  },
  'Delta Sigma Phi': {
    subtitle: 'Alpha Mu Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Collin Hennessey (fcb8cn@virginia.edu) and Parker Glass (zyh3zx@virginia.edu)' },
      { label: 'Philanthropy Chair', value: 'Corey Lin', href: 'mailto:qqc3ac@virginia.edu' },
      { label: 'Philanthropy', value: 'The Jimmy V Foundation for Cancer Research' },
      { label: 'Chapter Size as of Spring 2026', value: '78' },
      { label: 'Date founded at University of Virginia', value: '1921' },
      { label: 'President', value: 'Nathan Pomeroy' },
    ],
    paragraphs: [
      'Delta Sigma Phi\'s Alpha Mu Chapter has been a key member of the greek community at the University of Virginia since 1921. For over a century, we have remained committed to our founding principles of culture, harmony, and friendship.',
      'As a chapter, we take pride in developing well-rounded men who excel in the classroom, contribute to the Charlottesville community, and support one another through every moment of college life. Our brothers are scholars, athletes, and leaders, united by a shared commitment to becoming better versions of themselves.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://virginia.deltasig.org/' },
      { label: 'National Website', href: 'http://www.deltasig.org/' },
    ],
  },
  'St. Elmo Hall': {
    subtitle: 'Rho Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Charlie Long and Charlie Taylor' },
      { label: 'Alumni Chair', value: 'Tommy Brannock', href: 'mailto:tommy@loringwoodriff' },
      { label: 'Philanthropy Chair', value: 'Luke Osetek' },
      { label: 'Philanthropy', value: 'Samaritan Hope Foundation' },
      { label: 'Chapter Size as of Spring 2023', value: '68' },
      { label: 'Date founded at University of Virginia', value: 'January 1908' },
      { label: 'President', value: 'Jack Hughes' },
    ],
    paragraphs: [
      'The brotherhood of St. Elmo Hall is surely one that withstands the test of time. The beauty of St. Elmo stems from our members’ diverse backgrounds and mutual interests, upon which great friendships can be established.',
      'Founded on literature, morality, and friendship we organize a number of philanthropy events and serve as a base for a number of activities on grounds. Since our founding in 1908, St. Elmo Hall has allowed countless individuals to experience the joys of camaraderie, friendship, and brotherhood.',
      'Our goal is to continue leaving a positive mark on the University of Virginia, as well as the Charlottesville community as a whole.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://aig.alumni.virginia.edu/elmo/' },
      { label: 'National Website', href: 'http://www.deltaphifraternity.org/' },
    ],
  },
  'Zeta Psi': {
    subtitle: 'Beta Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Owen Cummings (rty2nu@virginia.edu) and Liam Wright (udz4sj@virginia.edu)' },
      { label: 'Philanthropy Chair', value: 'Hanes Malin', href: 'mailto:peh8cx@virginia.edu' },
      { label: 'Philanthropy', value: 'One Love & Ducks Unlimited' },
      { label: 'Alumni Chair', value: 'Clark Watta', href: 'mailto:abt2yb@virginia.edu' },
      { label: 'Chapter Size as of Spring 2026', value: '88' },
      { label: 'Date founded at University of Virginia', value: '1868' },
      { label: 'President', value: 'Jack Ghegan' },
    ],
    paragraphs: [
      'Zete\'s UVA chapter was founded in 1868. The Zete house is located at 169 Rugby Road. After a successful 2026 spring recruitment season, Zete welcomed in 19 new members, making the total roster 88 current active members.',
      'During this academic year, Zete flourished through its deepened commitment to service and community engagement. We are proud to have worked alongside impactful organizations such as One Love, Madison House, and Ducks Unlimited to host successful philanthropy events and volunteer initiatives. Building on this, Zete prides itself on success in the classroom. In the most recent academic year, our chapter achieved the #1 overall GPA in the IFC, highlighting our dedication to academic success.',
      'Looking ahead, we plan to continue this trajectory of success and achievement, while remaining committed in our mission to uphold Zeta Psi\'s principles of integrity and excellence, all while strengthening our relationship with the University of Virginia community.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://aig.alumni.virginia.edu/zetapsi/' },
      { label: 'National Website', href: 'http://www.alphadeltaphi.org/' },
    ],
  },
  'Delta Kappa Epsilon': {
    subtitle: 'Eta Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Peter Kaplan and James Shepard' },
      { label: 'Alumni Chair', value: 'Thomas Bloebaum' },
      { label: 'Philanthropy Chair', value: 'Jon Macey' },
      { label: 'Philanthropy', value: 'Norma Livingston Ovarian Cancer Foundation' },
      { label: 'Chapter Size as of Spring 2020', value: '83' },
      { label: 'Date founded at University of Virginia', value: 'November 26, 1852' },
      { label: 'President', value: 'Thomas Bloebaum' },
    ],
    paragraphs: [
      'Delta Kappa Epsilon was the first fraternity founded at the University of Virginia in 1852. Since our inception, we have celebrated a brotherhood of more differences than similarities.',
      'With hometowns ranging from Australia to New Orleans and everywhere in between, we are a brotherhood of different backgrounds. We celebrate our different interests as we have a multitude of varsity athletes, students involved in the arts and academic scholars.',
      'Our mission is to instill values of leadership, discipline, and integrity that will last a lifetime. The lessons learned through our experiences as active members of Delta Kappa Epsilon stay with us for life.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://aig.alumni.virginia.edu/dke/' },
      { label: 'National Website', href: 'http://www.dke.org/' },
    ],
  },
  'Delta Upsilon': {
    subtitle: 'Virginia Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Kellen Narke' },
      { label: 'Alumni Chair', value: 'Matthew Gottfried' },
      { label: 'Philanthropy Chair', value: 'William Bergman' },
      { label: 'Philanthropy', value: 'Virginia for Veterans' },
      { label: 'Chapter Size as of Spring 2022', value: '70' },
      { label: 'Date founded at University of Virginia', value: 'April 8, 1922' },
      { label: 'President', value: 'Benjamin Szalankiewicz' },
    ],
    paragraphs: [
      'The year 2022 marked the 100 year anniversary of the founding of Delta Upsilon at the University of Virginia. DU brothers from across decades gathered in Charlottesville for a weekend-long celebration of the Virginia Chapter’s centennial, which culminated in the initiation of the newest pledge class.',
      'The Virginia Chapter of Delta Upsilon fully embraces its slogan of “Building Better Men” as DU boasts members of club athletic teams, leaders of philanthropic organizations, class council officers, members of professional fraternities, and an ever expanding academic and professional alumni network.',
      'In the fall semester, DU partnered with AXO to raise hundreds for the UVA Strong fundraiser to benefit the families of the victims and survivors of the November 13th shooting. The chapter looks to continue its success in the spring by partnering again with SARA for its annual House of Blues philanthropy and hosting the biannual alumni event in order to continue its strong ties to the UVA community as well as its alumni network.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://www.uvadeltaupsilon.com/' },
      { label: 'National Website', href: 'http://www.deltau.org/Home' },
    ],
  },
  'St. Anthony Hall': {
    subtitle: 'Upsilon Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Trip Janucik - nzn3qc@virginia.edu, Ryker Calic - bxh2dg@virginia.edu, Dexy Payne - ewt4nd@virginia.edu' },
      { label: 'Alumni Chair', value: 'Charlie Kaye', href: 'mailto:sbh6yw@virginia.edu' },
      { label: 'Philanthropy Chair', value: 'Bennett Yue', href: 'mailto:hny4rt@virginia.edu' },
      { label: 'Philanthropy', value: 'Casa 0.5k' },
      { label: 'Chapter Size as of Spring 2026', value: '80' },
      { label: 'Date founded at University of Virginia', value: '1860' },
      { label: 'President', value: 'Eli Bare', href: 'mailto:Yuw3pe@virginia.edu' },
    ],
    paragraphs: [
      'The Upsilon Chapter of St. Anthony Hall and our 75 brothers continue to have a strong presence at the University of Virginia as well as in the Charlottesville community.',
      'This past fall, we participated in raising money and awareness for men’s health and cancer research as many brothers worked with the “Movember On Grounds” group. Our brothers also continue to be involved with Madison House as well as other local charities.',
      'We are excited to have gained 25 new members this past semester and look forward to our Billy Hill Memorial Run and other philanthropy events in the spring.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://aig.alumni.virginia.edu/hall/' },
      { label: 'National Website', href: 'http://www.stanthonyhall.org/' },
    ],
  },
  'Theta Delta Chi': {
    subtitle: 'Nu Charge',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'RJ May and Zachary Rios' },
      { label: 'Alumni Chair', value: 'Aaron Silver', href: 'mailto:aaronjsilver10@gmail.com' },
      { label: 'Philanthropy Chairs', value: 'Dev Aswani', href: 'mailto:devaswanitdx@gmail.com' },
      { label: 'Philanthropy', value: 'The Doug Flutie & Jr. Foundation for Autism' },
      { label: 'Rush Chairs', value: 'Kevin Gallardo and Dev Aswani', href: 'mailto:kevingallardotdx@gmail.com' },
      { label: 'Charge Size as of Spring 2026', value: '32' },
      { label: 'Date founded at University of Virginia', value: '1857' },
      { label: 'President', value: 'Alejandro Erazo' },
    ],
    paragraphs: [
      'Established in 1857, the Nu Charge of Theta Delta Chi is one of the oldest fraternities at the University of Virginia. The brotherhood prides itself on a tradition of friendship, morality, and scholarship.',
      'We recently celebrated our 100th year at our house at 1811 Lambeth Lane. TDX maintains strong relations with other greek organizations, the University, and the Charlottesville community through philanthropic efforts and outreach programs.',
      'Theta Delta Chi holds multiple philanthropic events throughout the year to raise money for Autism Speaks and the Virginia Institute of Autism. The brotherhood also has leaders in other organizations around Grounds, including the Virginia Venture Fund, Virginia Motorsports, and the International Relations Organization.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://www.thetadeltachiuva.com/' },
      { label: 'National Website', href: 'http://www.thetadeltachi.net/' },
    ],
  },
  'Pi Kappa Phi': {
    subtitle: 'Beta Upsilon Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Andrew Datch', href: 'mailto:xgp4mb@virginia.edu' },
      { label: 'Alumni Chair', value: 'Gavin McNulty', href: 'mailto:dgq9sk@virginia.edu' },
      { label: 'Philanthropy Chair', value: 'Matthew Vu', href: 'mailto:qjy4pm@virginia.edu' },
      { label: 'Philanthropy', value: 'The Ability Experience' },
      { label: 'Chapter Size as of Spring 2026', value: '71' },
      { label: 'Date founded at University of Virginia', value: 'May 6, 1961' },
      { label: 'President', value: 'Griffin Kramer' },
    ],
    paragraphs: [
      'For over 60 years, the Beta Upsilon Chapter of Pi Kappa Phi has been a dominant and proud part of the University of Virginia fraternity community. Our history of success and brotherhood speaks for itself with consistently high achievements and leadership on and off grounds. We currently hold one of the top UVA Fraternity cumulative GPAs and have brothers in the College of Arts and Sciences, McIntire School of Commerce, Frank Batten School of Leadership and Public Policy, School of Architecture, School of Engineering and Applied Sciences, and the School of Data Science.',
      'We place a strong emphasis on building genuine relationships within our chapter and across Grounds. Through our national philanthropy, The Ability Experience, we are committed to supporting individuals with disabilities and promoting inclusion within our community. Above all, Pi Kappa Phi offers a well-rounded experience grounded in brotherhood, accountability, and shared purpose. Our members leave with lifelong friendships, strong campus connections, and the skills to lead and make an impact well beyond their time at UVA.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://www.pikappuva.com/' },
      { label: 'National Website', href: 'http://www.pikapp.org/' },
    ],
  },
  'Sigma Alpha Epsilon': {
    subtitle: 'Omicron Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Avery Joseph and Grayson Prillaman' },
      { label: 'Alumni Chair', value: 'Henry Swartz' },
      { label: 'Philanthropy Chair', value: 'Henry Laudano' },
      { label: 'Philanthropy', value: 'NMDP, Children’s Miracle Network Hospitals, Sleep in Heavenly Peace, Movember, Hitting Cancer Below the Belt' },
      { label: 'Chapter Size as of Spring 2023', value: '80' },
      { label: 'Date founded at University of Virginia', value: 'December 19, 1857' },
      { label: 'President', value: 'Daniel Bronfman' },
    ],
    paragraphs: [
      'For over 150 years, we have promoted the highest standards of brotherhood, scholarship, and service and have worked to uphold the ideals of our founders and as set forth in our creed, the True Gentleman.',
      'In recent years, we have grown in size to roughly 75 members. We continue to promote active community service with ties to Camp Kesem, Madison House, Pancakes for Parkinson’s and Hoothon.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://uvasae.com/' },
      { label: 'National Website', href: 'http://www.sae.net/' },
    ],
  },
  'Sigma Nu': {
    subtitle: 'Beta Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Jack Fallon and Ben Van Zandt' },
      { label: 'Alumni Chair', value: 'Lachlan Bill' },
      { label: 'Philanthropy Chair', value: 'Ethan Supplee' },
      { label: 'Philanthropy', value: 'St. Jude Children’s Research Hospital' },
      { label: 'Chapter size as of Spring 2023', value: '89' },
      { label: 'Date founded at University of Virginia', value: '1871' },
      { label: 'President', value: 'Quentin Shin' },
    ],
    paragraphs: [
      'The Beta Chapter of Sigma Nu has turned into one of the fastest-growing fraternities at UVA. After being re-colonized in 2018, Sigma Nu has grown its presence in the UVA community thanks to our leadership, and the hard work of our Philanthropy, Rush, Alumni, and several other executive chairs over the last couple of years.',
      'Our recruitment is exceptional with a growing number of new members in each PC since our re-colonization. This growing brotherhood allows us to be more active in several clubs, volunteer opportunities, and student-led activities due to our brothers’ outgoing and engaging nature.',
      'Lastly, we are proud of our efforts to raise money for our National Philanthropy, St. Jude Children’s Hospital, with thousands of dollars being raised over the past two years. All of these efforts are shaped by our principles of Truth, Love, and Honor, a standard to which we hold every member of Sigma Nu to.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://www.virginiasigmanu.org/' },
      { label: 'National Website', href: 'https://www.sigmanu.org/' },
    ],
  },
  'Sigma Phi (SERP)': {
    subtitle: 'Alpha Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Andrew Murphy and Cole Dickerson' },
      { label: 'Alumni Chair', value: 'Declan Watson' },
      { label: 'Philanthropy Chair', value: 'Alexander Macturk' },
      { label: 'Philanthropy', value: 'UVA Pediatric Hospital' },
      { label: 'Chapter Size as of Spring 2023', value: '64' },
      { label: 'Date founded at University of Virginia', value: 'February 27, 1954' },
      { label: 'President', value: 'Liam Addy' },
    ],
    paragraphs: [
      'Sigma Phi Society is a group of men who thrive off academic excellence, community involvement and the values of brotherhood.',
      'The oldest national fraternity of continuous existence, we strive to continue prospering at the University of Virginia after six decades of doing just that. Our brothers are involved in many extracurricular activities around grounds and continue to impact the University community in a multitude of ways.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://www.sigmaphiuva.org/' },
      { label: 'National Website', href: 'http://www.sigmaphi.org/' },
    ],
  },
  'Sigma Chi': {
    subtitle: 'Psi Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'George Constable and Drew Winterstein' },
      { label: 'Alumni Chair', value: 'Michael Cuomo' },
      { label: 'Philanthropy Chairs', value: 'Joe Hardy' },
      { label: 'Philanthropy', value: 'Derby Days for the UVa Children’s Hospital' },
      { label: 'Chapter Size as of Spring 2020', value: '75' },
      { label: 'Date founded at University of Virginia', value: 'December 10, 1860' },
      { label: 'President', value: 'Luke Lustig' },
    ],
    paragraphs: [
      'The Psi Chapter of Sigma Chi is proud to celebrate another year of excellence in the classroom, in athletics, and in the community. This past spring, we reached our goal of raising $30,000 for the UVA Children’s Hospital through our annual Derby Days philanthropy.',
      'As a chapter, we remain committed to inclusion and diversity in membership. Over the past four years, we have admitted members from 12 different countries and across most of the United States. We believe that this diversity in background and perspective strengthens the bonds of our brotherhood.',
      'We are thankful for the continued efforts and contributions from our alumni network that have made the recent additions to our chapter house possible.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://psiofsigmachi.com/' },
      { label: 'National Website', href: 'http://www.sigmachi.org/' },
    ],
  },
  'Phi Delta Theta': {
    subtitle: 'Beta Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Joe Stern' },
      { label: 'Alumni Chair', value: 'Adarsh Shah' },
      { label: 'Philanthropy Chair', value: 'Connor Bowman' },
      { label: 'Philanthropy', value: 'Habitat for Humanity and Live Like Lou' },
      { label: 'Chapter Size as of Spring 2023', value: '68' },
      { label: 'Date founded at University of Virginia', value: 'November 18, 1873' },
      { label: 'President', value: 'Lukas Lehman' },
    ],
    paragraphs: [
      'Phi Delta Theta has grown tremendously over the past year, making us excited for the future of Phi Delt at UVA. We have increased our involvement in the community and our dedication to service while continuing our successful philanthropic efforts with Delta Sigma Theta Sorority, Inc., an NPHC sorority, with our 12th annual Hoop Dreams basketball tournament, raising the largest amount to date!',
      'We hold one of the top UVa Fraternity cumulative GPAs and represent the CLAS, COMM, Batten, Architecture, and Engineering Schools. This past year, we won Chapter of the Year and Greek Person of the Year at the 2024 UVA IFC Greek Awards.',
      'Additionally, we have brothers serving in various leadership roles around Grounds across many organizations such as the University Guide Service, the IFC Governing Board, Cavalier Daily, Hullabahoos, Virginia Gentlemen, Engineering Student Council, and beyond. We have grown tremendously as a chapter since our rechartering in 2001 and expect even more forward progress in the coming years.',
    ],
    links: [
      { label: 'National Website', href: 'http://www.phideltatheta.org/' },
    ],
  },
  'Phi Sigma Kappa': {
    subtitle: 'Psi Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Hunter Oakley' },
      { label: 'Alumni Chair', value: 'Michael Li' },
      { label: 'Philanthropy Chair', value: 'Hunter Oakley' },
      { label: 'Philanthropy', value: 'Habitat for Humanity' },
      { label: 'Chapter Size as of Fall 2024', value: '30' },
      { label: 'Date founded at University of Virginia', value: '1907' },
      { label: 'President', value: 'Cole Smith' },
    ],
    paragraphs: [
      'Our Psi Chapter of Phi Sigma Kappa, founded in 1907, is built on the principles of promoting brotherhood, stimulating scholarship, and developing character and leadership. Phi Sig engages a strong, diverse brotherhood across a variety of academic and social disciplines.',
      'You can find brothers of Phi Sig active everywhere around grounds, whether building and racing cars through Solar Car and Autonomous Racing, winning hacking competitions with CNS or leading the Course Forum, finance groups like VEO, Accounting Society, and BAI consulting, performing in the jazz ensemble, orchestra, and spoken poetry, leading outdoors and skiing trips with ODC and VASST, winning smash tournaments, and much more.',
      'Academically, Phi Sig has consistently earned among the highest average chapter GPAs, earning a 3.7+ last semester. Phi Sig is looking forward to welcoming the new Spring 2025 pledge class and continuing to grow our brotherhood. We are also excited to expand our volunteering opportunities and alumni events this semester. Damn proud!',
    ],
    links: [
      { label: 'National Website', href: 'http://www.phisigmakappa.org/' },
    ],
  },
  'Chi Phi': {
    subtitle: 'Alpha Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Chay Balderson and Robert Avant' },
      { label: 'Philanthropy Chair', value: 'Caden Cleffi', href: 'mailto:qyb3zb@virginia.edu' },
      { label: 'Rush Chair', value: 'Reilynd Worrell, RB Brown, Luke Dickhuth'},
      { label: 'Philanthropy', value: 'Battle of the Bands' },
      { label: 'Alumni Chair', value: 'Trey Cho', href: 'mailto:hhd4kc@virginia.edu'},
      { label: 'Chapter Size as of Spring 2026', value: '84' },
      { label: 'Date founded at University of Virginia', value: '1859' },
      { label: 'President', value: 'Dylan Hill', href: 'mailto:mce8ep@virginia.edu'},
    ],
    paragraphs: [
      'The Alpha Chapter of the Chi Phi fraternity has been promoting brotherhood since 1824 while raising money for different charities such as the Ronald McDonald house and Camp Kesem.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://aig.alumni.virginia.edu/chiphi/' },
      { label: 'National Website', href: 'http://www.chiphi.org/' },
    ],
  },
  'Alpha Sigma Phi': {
    subtitle: 'Zeta Upsilon Chapter',
    image: null,
    details: [
      { label: 'Chapter Size as of Spring 2023', value: '54' },
      { label: 'Philanthropy', value: 'National Alliance on Mental Illness' },
    ],
    paragraphs: [
      'Since our founding at the University, Alpha Sigma Phi has developed as a strong brotherhood of young men excelling in academics, leadership, and as a part of the larger UVA community.',
      'Members of our chapter come together and grow as well-rounded individuals, and have formed lifelong bonds with one another, and valuable connections for the future.',
      'Our chapter has proudly raised thousands of dollars for the National Alliance on Mental Illness to help fund research, treatment, and resources for those of all ages dealing with mental health challenges.',
      'Each year, we greatly look forward to recruitment and being able to share our brotherhood with new members. We have recently moved to 125 Chancellor St. Feel free to contact us with any questions at all.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://alphasigmaphiuva.wixsite.com/home' },
      { label: 'National Website', href: 'https://alphasig.org/' },
    ],
  },
  'Pi Lambda Phi': {
    subtitle: 'Omega Alpha Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Ryan Mcgowan' },
      { label: 'Alumni Chair', value: 'Joe Myers' },
      { label: 'Philanthropy Chair', value: 'Krishna Bhamidipati' },
      { label: 'Philanthropy', value: 'National Alliance on Mental Illness (NAMI)' },
      { label: 'Chapter Size as of Spring 2020', value: '50' },
      { label: 'Date founded at University of Virginia', value: '1932' },
      { label: 'President', value: 'Dominic Richmond' },
    ],
    paragraphs: [
      'Pi Lambda Phi Fraternity was founded at Yale University in 1895, becoming the first non-sectarian fraternity in the United States. The brothers of Pi Lambda Phi stand for the Elimination of Prejudice, and accept members regardless of race, religion, creed, or sexual orientation.',
      'Our brothers believe that actively promoting the Elimination of Prejudice in daily life builds strong character and may aid communication between people of different backgrounds and lifestyles, leading to greater knowledge, understanding, and peaceful coexistence.',
      'The VA Omega Alpha Chapter at the University of Virginia seeks out leaders within the school to continue this cause, and its members are proud of being the first NIC Fraternity at the university to desegregate, with the initiation of Brother David Temple in 1969.',
      'Philanthropically, Pi Lambda Phi supports Charlottesville’s non-profit organization S.A.R.A., the Sexual Assault Resource Agency, with philanthropy events in the Fall and Spring semesters, as well as participating in SARA hosted events such as the “Walk-A-Mile in Her Shoes” Walk for Awareness in the Spring.',
      'Pi Lambda Phi aims to unite active members of the UVA community in the common goal of the Elimination of Prejudice, and encourages strong academic and extra-curricular participation.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://uva.pilambdaphi.org/' },
      { label: 'National Website', href: 'http://www.pilambdaphi.org/site/c.plKXL7MPIqG/b.3529295/k.BFF6/Pi_Lambda_Phi_Home.htm' },
    ],
  },
  'Sigma Alpha Mu': {
    subtitle: 'Beta Psi Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Chris Amodeo - nhz6xv@virginia.edu, Brady Kron - rsg4m@virginia.edu, Connor Pennell - utz4cc@virginia.edu' },
      { label: 'Alumni Chair', value: 'Hunter Carlson', href: 'mailto:kxq4rm@virginia.edu' },
      { label: 'Philanthropy Chair', value: 'Ryan Allbee', href: 'mailto:ymc2fy@virginia.edu' },
      { label: 'Philanthropy', value: 'The Judy Fund at the Alzheimer’s Association' },
      { label: 'Chapter Size as of Spring 2026', value: '78' },
      { label: 'Date founded at University of Virginia', value: '1968' },
      { label: 'President', value: 'Austin Berg' },
    ],
    paragraphs: [
      'At Sigma Alpha Mu - Beta Psi, we are excited to continue creating a strong brotherhood and moving forward in all areas this year.',
      'We are building off of our philanthropy success from last semester, as we raised over $5,000 for the Judy Fund of the Alzheimer’s Association. We will be raising money and awareness for the Alzheimer’s Association with a UVA and Red Bull sponsored event at Carter Mountain Orchard in April.',
      'Furthermore, many brothers have continually participated in various volunteering activities and clubs, such as Blossom Together @ UVA.',
      'Finally, we had an extremely successful alumni weekend last semester that was very beneficial for brother-alumni relations.',
    ],
    links: [
      { label: 'National Website', href: 'http://sam.org/' },
      { label: 'Chapter Website', href: 'http://aig.alumni.virginia.edu/sam/' },
    ],
  },
  'Sigma Pi': {
    subtitle: 'Beta Pi Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Matt Caputo' },
      { label: 'Alumni Chair', value: 'Donovan Ray' },
      { label: 'Philanthropy Chair', value: 'Luke Heberle' },
      { label: 'Philanthropy', value: 'St. Baldrick’s Foundation' },
      { label: 'Chapter Size as of Spring 2020', value: '40' },
      { label: 'Date founded at University of Virginia', value: 'April 4, 1959' },
      { label: 'President', value: 'James Harrison McElroy' },
    ],
    paragraphs: [
      'Sigma Pi just finished a successful spring rush, bringing in a new pledge of sixteen members. Sigma Pi is a brotherhood that prides itself on academic excellence, service, and university involvement to leave a positive, lasting mark on the Charlottesville community.',
      'Last November we held our philanthropy ACE project Grilled Cheeses for Good Mental Health, where our brothers sold grilled cheeses to students and others on the corner and donated all proceeds to mental health organizations to boost awareness and understanding of mental health issues.',
      'We are starting to gear up for our spring philanthropy, Surf and Turf, a daylong all you can eat shrimp and steak cook featuring live music, with all proceeds, typically several thousand dollars, donated to breast cancer research.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://aig.alumni.virginia.edu/sigmapi/' },
      { label: 'National Website', href: 'http://www.sigmapi.org/' },
    ],
  },
  'Phi Kappa Psi': {
    subtitle: 'Alpha Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Jackson Pegg and Arthur Schillewaert' },
      { label: 'Alumni Chair', value: 'Ethan Chase' },
      { label: 'Philanthropy Chair', value: 'Riley Knebel' },
      { label: 'Philanthropy', value: 'Hoothon – UVA Children Hospital & Children Miracle Network' },
      { label: 'Current Chapter Size', value: '71' },
      { label: 'Date founded at University of Virginia', value: 'February 19, 1853' },
      { label: 'President', value: 'Noah Altamar' },
    ],
    paragraphs: [
      'Founded in 1853, the Virginia Alpha Chapter of Phi Kappa Psi is one of the oldest fraternities on grounds. Phi Psi initiated President Woodrow Wilson in 1879 and has since graduated hundreds of alumni.',
      'The present house, built in 1920, is home to a membership that takes pleasure in its position on grounds as well as its many popular social and philanthropic events.',
    ],
    links: [
      { label: 'Chapter Website', href: 'http://aig.alumni.virginia.edu/phipsi/' },
      { label: 'National Website', href: 'http://www.phikappapsi.com/' },
    ],
  },
  'Phi Society': {
    subtitle: 'Beta Chapter',
    image: null,
    details: [
      { label: 'Rush Chair', value: 'Jack Thornton', href: 'mailto:fnx4tf@virginia.edu' },
      { label: 'Alumni Chair', value: 'Alessio Azimipour', href: 'mailto:uhj6ew@virginia.edu' },
      { label: 'Philanthropy Chair', value: 'Zachary Lipp', href: 'mailto:tnb2cv@virginia.edu' },
      { label: 'Philanthropy', value: 'ASPCA of Charlottesville' },
      { label: 'Chapter Size as of Spring 2026', value: '58' },
      { label: 'Date founded at University of Virginia', value: 'November 18th, 1873' },
      { label: 'President', value: 'Richard Roehm' },
    ],
    paragraphs: [
      'Phi Society is the only local chapter associated with the Inter-Fraternity Council at UVA. We trace our roots back to the foundation of Phi Delta Theta in 1848 at Miami of Ohio and the establishment of the Virginia Beta chapter of Phi Delta Theta at the University of Virginia in 1873.',
      'In 2000, with the support of our alumni we split from Phi Delta Theta nationally. Today, our chapter is thriving at One University Circle.',
      'Beginning in the Fall of 2019, we brought on a new house chef, Trish Tye, to re-establish the time honored tradition of brotherhood dinners. We continue our mission of fostering a brotherhood defined by friendship, moral rectitude, and sound learning.',
    ],
    links: [
      { label: 'Chapter Website', href: 'https://aig.alumni.virginia.edu/phisociety/' },
    ],
  },
  'Chi Psi': {
    subtitle: 'Alpha Omicron Chapter',
    image: null,
    details: [
      { label: 'Rush Chairs', value: 'Noah Laidhold and Eddie Fong' },
      { label: 'Alumni Chair', value: 'Daniel Ludwig' },
      { label: 'Philanthropy Chair', value: 'Turner DeShon' },
      { label: 'Philanthropy', value: 'Gordie Center for Substance Abuse Prevention' },
      { label: 'Chapter Size as of Spring 2020', value: '55' },
      { label: 'Date founded at University of Virginia', value: '1860' },
      { label: 'President', value: 'Andrew Williams' },
    ],
    paragraphs: [
      'Alpha Omicron of Chi Psi exists to build better men, create lasting and meaningful relationships between brothers, and to enhance brother’s college experiences.',
      'This is done through internal and external social events, as well as philanthropic endeavors within the Charlottesville community.',
    ],
    links: [
      { label: 'National Website', href: 'http://www.chipsi.org/' },
    ],
  },
};

export function getChapterImage(name) {
  return chapterImages[name] || null;
}

export function getChapterContent(name) {
  return chapterContent[name] || null;
}
