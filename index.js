const themeBtn = document.getElementById("themeToggle");
const langBtn = document.getElementById("langToggle");

const elements = {
  navbarBrand: document.getElementById("navbarBrand"),
  cvButton: document.getElementById("cvButton"),
  themeBtn: themeBtn,
  langBtn: langBtn,
  title: document.getElementById("title"),
  description: document.getElementById("description"),
  intro: document.getElementById("intro"),
  intro2: document.getElementById("intro2"),
  skillsTitle: document.getElementById("skillsTitle"),
  skillsFrontend: document.getElementById("skillsFrontend"),
  skillsFrontendDesc: document.getElementById("skillsFrontendDesc"),
  skillsProgramming: document.getElementById("skillsProgramming"),
  skillsProgrammingDesc: document.getElementById("skillsProgrammingDesc"),
  skillsTools: document.getElementById("skillsTools"),
  skillsToolsDesc: document.getElementById("skillsToolsDesc"),
  certificates: document.getElementById("Certificates"),
  metaCertificates: document.getElementById("metaCertificatesTitle"),
  projectsTitle: document.getElementById("projectsTitle"),
  p1Title: document.getElementById("p1Title"),
  p1Desc: document.getElementById("p1Desc"),
  p2Title: document.getElementById("p2Title"),
  p2Desc: document.getElementById("p2Desc"),
  p3Desc: document.getElementById("p3Desc"),
  p3Title: document.getElementById("p3Title"),
  p4Desc: document.getElementById("p4Desc"),
  p4Title: document.getElementById("p4Title"),
  p1Live: document.getElementById("p1Live"),
  p1Github: document.getElementById("p1Github"),
  p2Live: document.getElementById("p2Live"),
  p2Github: document.getElementById("p2Github"),
  contactText: document.getElementById("contactText"),
  emailLink: document.getElementById("emailLink"),
  phoneLink: document.getElementById("phoneLink"),
  githubLink: document.getElementById("githubLink"),
  linkedinLink: document.getElementById("linkedinLink"),
  copyright: document.getElementById("copyright"),
};

const translations = {
  en: {
    navbarBrand: "Stefan Alcaide Pavlou",
    cvButton: "📄 Download Resume",
    themeDark: "🌙 Dark",
    themeLight: "☀️ Light",
    langBtn: "DE",
    title: "Frontend Web Developer",
    description: "I build clean, responsive web applications with modern technologies.",
    intro: "With more than 14 years of experience in the security profession, my career began as a Green Beret, where I developed the discipline, leadership, and operational mindset needed to perform in high-pressure environments. Since then, I have built extensive experience in security operations, risk management, and protecting people and critical assets.",
    intro2:"Today, my focus is on combining that operational security background with cybersecurity expertise. As the lines between traditional and digital threats continue to blur, my goal is to help organizations build resilient, integrated security strategies that protect both their people and their information.",
    skillsTitle: "Skills",
    skillsFrontend: "Frontend",
    skillsFrontendDesc: "HTML, CSS, Bootstrap, JavaScript",
    skillsProgramming: "Programming",
    skillsProgrammingDesc: "JavaScript, Python",
    skillsTools: "Tools",
    skillsToolsDesc: "Git, GitHub, VS Code, Linux Basics, Kali Linux, OSINT, Wireshark, Nmap",
    certificates: "Certificates",
    metaCertificates: "Meta Certificates",
    projectsTitle: "Projects",
    p1Title: "Calculator App",
    p1Desc: "Calculator made with Python and tkinter.",
    p2Title: "The Maze",
    p2Desc: "A RPG Game made with RPG Maker MZ Engine.",
    p3Desc:"A Web App that let's you find Anime, and watch trailers.",
    p3Title:"Anime Explorer",
    p4Desc:"A Website I made to test the JavaScript Event Listener.",
    p4Title:"Drum Kit",
    p1Live: "Live",
    p1Github: "GitHub",
    p2Live: "Live",
    p2Github: "Itch.io",
    contactText: "Contact me:",
    emailLink: "stefan_alcaide@hotmail.com",
    phoneLink: "+49 176 324 157 09",
    githubLink: "GitHub",
    linkedinLink: "LinkedIn",
    copyright:"©All rights reserved  Stefan Alcaide Pavlou 2026",
  },
  de: {
    navbarBrand: "Stefan Alcaide Pavlou",
    cvButton: "📄 Lebenslauf herunterladen",
    themeDark: "🌙 Dunkel",
    themeLight: "☀️ Hell",
    langBtn: "EN",
    title: "Frontend Webentwickler",
    description: "Ich entwickle saubere und responsive Webanwendungen.",
    intro: "Mit mehr als 14 Jahren Erfahrung im Sicherheitsbereich begann meine berufliche Laufbahn als Green Beret, wo ich die Disziplin, die Führungsqualitäten und die operative Denkweise entwickelte, die erforderlich sind, um in Umgebungen mit hohem Druck zu bestehen. Seitdem habe ich umfangreiche Erfahrungen in den Bereichen Sicherheitsoperationen, Risikomanagement sowie beim Schutz von Menschen und kritischen Vermögenswerten gesammelt.",
    intro2: "Heute liegt mein Schwerpunkt darauf, diesen operativen Sicherheitshintergrund mit Fachwissen im Bereich Cybersicherheit zu verbinden. Da die Grenzen zwischen traditionellen und digitalen Bedrohungen immer mehr verschwimmen, ist es mein Ziel, Unternehmen dabei zu unterstützen, widerstandsfähige, integrierte Sicherheitsstrategien zu entwickeln, die sowohl ihre Mitarbeiter als auch ihre Informationen schützen.",
    skillsTitle: "Fähigkeiten",
    skillsFrontend: "Frontend",
    skillsFrontendDesc: "HTML, CSS, Bootstrap, JavaScript",
    skillsProgramming: "Programmierung",
    skillsProgrammingDesc: "JavaScript, Python",
    skillsTools: "Werkzeuge",
    skillsToolsDesc: "Git, GitHub, VS Code, Linux Grundlagen, Kali Linux, OSINT, Wireshark, Nmap",
    certificates:"Zertifikate",
    metaCertificates:"Meta Zertifikate",
    projectsTitle: "Projekte",
    p1Title: "Taschenrechner App",
    p1Desc: "Taschenrechner mit Python und tkinter.",
    p2Title: "Das Labyrinth",
    p2Desc: "Ein RPG videospiel das ich mit der RPG maker MZ Machine gemacht habe.",
    p3Desc:"Eine Web-App, mit der du Anime finden und Trailer ansehen kannst",
    p3Title:"Anime Explorer",
    p4Desc:"Eine Webseite die ich gemacht habe um den JavaScript Event Listener zu testen.",
    p4Title:"Schlagzeug",
    p1Live: "Live",
    p1Github: "GitHub",
    p2Live: "Live",
    p2Github: "Itch.io",
    contactText: "Kontaktiere mich:",
    emailLink: "stefan_alcaide@hotmail.com",
    phoneLink: "+49 176 324 157 09",
    githubLink: "GitHub",
    linkedinLink: "LinkedIn",
    copyright:"©Alle Rechte vorbehalten Stefan Alcaide Pavlou 2026",
  }
};

let currentLang = "en";

// Theme toggle
function updateThemeButtonText() {
  themeBtn.textContent = document.body.classList.contains("dark") ? translations[currentLang].themeLight : translations[currentLang].themeDark;
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateThemeButtonText();
});

// Language toggle
function updateText() {
  for (const key in elements) {
    if (!elements[key]) continue;
    if (key === "themeBtn") continue;

    // Footer links: only change text, keep href
    if (["emailLink","phoneLink","githubLink","linkedinLink"].includes(key)) {
      elements[key].textContent = translations[currentLang][key];
      continue;
    }

    elements[key].textContent = translations[currentLang][key];
  }
  updateThemeButtonText();
  langBtn.textContent = translations[currentLang].langBtn;
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  updateText();
});

// Initial theme button
updateThemeButtonText();
