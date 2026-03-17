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
    title: "Junior Frontend Web Developer",
    description: "I build clean, responsive web applications with modern technologies.",
    intro: "I am currently retraining as an IT specialist for application development with a focus on front-end web development. My focus is on developing modern, user-friendly web interfaces and cleanly structured, maintainable applications.My passion for gaming and technology has been with me since I was about three years old. Early on, this developed into a deep interest in the technical background of digital systems. This curiosity still shapes me today: I have a keen thirst for knowledge, am constantly learning new things, and like to get to the bottom of things—especially in the world of software and web development.",
    skillsTitle: "Skills",
    skillsFrontend: "Frontend",
    skillsFrontendDesc: "HTML, CSS, Bootstrap, JavaScript",
    skillsProgramming: "Programming",
    skillsProgrammingDesc: "JavaScript, Python (Basics), OOP",
    skillsTools: "Tools",
    skillsToolsDesc: "Git, GitHub, VS Code, Linux Basics",
    certificates: "Certificates",
    metaCertificates: "Meta Certificates",
    projectsTitle: "Projects",
    p1Title: "Calculator App",
    p1Desc: "Calculator made with Python and tkinter.",
    p2Title: "The Maze",
    p2Desc: "A RPG Game made with RPG Maker MZ Engine.",
    p3Desc:"A Web App that let's you find Anime, and watch trailers.",
    p3Title:"Anime Explorer",
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
    cvButton: "📄 Lebenslauf Herunterladen",
    themeDark: "🌙 Dunkel",
    themeLight: "☀️ Hell",
    langBtn: "EN",
    title: "Junior Frontend Webentwickler",
    description: "Ich entwickle saubere und responsive Webanwendungen.",
    intro: "Ich befinde mich aktuell in einer Umschulung zum Fachinformatiker für Anwendungsentwicklung (FIAE) mit Schwerpunkt auf Frontend-Webentwicklung. Mein Fokus liegt auf der Entwicklung moderner, benutzerfreundlicher Weboberflächen sowie sauber strukturierter und wartbarer Anwendungen.Meine Leidenschaft für Gaming und Technologie begleitet mich, seit ich etwa drei Jahre alt bin. Schon früh entwickelte sich daraus ein tiefes Interesse für die technischen Hintergründe digitaler Systeme. Diese Neugier prägt mich bis heute: Ich habe einen ausgeprägten Wissensdurst, lerne ständig Neues und gehe Dingen gerne auf den Grund , besonders in der Welt der Software- und Webentwicklung.",
    skillsTitle: "Fähigkeiten",
    skillsFrontend: "Frontend",
    skillsFrontendDesc: "HTML, CSS, Bootstrap, JavaScript",
    skillsProgramming: "Programmierung",
    skillsProgrammingDesc: "JavaScript, Python (Grundlagen), OOP",
    skillsTools: "Werkzeuge",
    skillsToolsDesc: "Git, GitHub, VS Code, Linux Grundlagen",
    certificates:"Zertifikate",
    metaCertificates:"Meta Zertifikate",
    projectsTitle: "Projekte",
    p1Title: "Taschenrechner App",
    p1Desc: "Taschenrechner mit Python und tkinter.",
    p2Title: "Das Labyrinth",
    p2Desc: "Ein RPG videospiel das ich mit der RPG maker MZ Machine gemacht habe.",
    p3Desc:"Eine Web-App, mit der du Anime finden und Trailer ansehen kannst.",
    p3Title:"Anime Explorer",
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
