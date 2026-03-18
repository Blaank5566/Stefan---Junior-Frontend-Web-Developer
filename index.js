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
    cvButton: "📄 CV",
    themeDark: "🌙 Dark",
    themeLight: "☀️ Light",
    langBtn: "DE",
    title: "Junior Frontend Web Developer",
    description: "I build clean, responsive web applications with modern technologies.",
    intro: "I’m passionate about web development and the way websites and applications bring ideas to life. From designing interactive layouts to developing user friendly, responsive interfaces, I enjoy combining creativity with technical expertise. I find it particularly exciting how small details such as smooth animations or clear user guidance can significantly enhance the user experience.I am currently retraining to become a certified IT specialist in application development. This phase gives me the opportunity to systematically expand my skills, learn best practices in programming, and gain practical experience in app and game development. Even though I previously served in special forces, I am now fully dedicated to my passion for technology and software development.I love challenges that push my skills, whether it’s developing small RPGs, interactive web applications, or experimenting with new frameworks and tools. My goal is to develop software that is both functional and user friendly, and to contribute to projects where I can learn, grow, and create real value.",
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
    p3Desc:"A Web App that let's you find Anime, and watch trailers",
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
    cvButton: "📄 Lebenslauf",
    themeDark: "🌙 Dunkel",
    themeLight: "☀️ Hell",
    langBtn: "EN",
    title: "Junior Frontend Webentwickler",
    description: "Ich entwickle saubere und responsive Webanwendungen.",
    intro: "Ich brenne für Webentwicklung und die Art und Weise, wie Websites und Anwendungen Ideen zum Leben erwecken. Vom Gestalten interaktiver Layouts bis hin zum Entwickeln benutzerfreundlicher, responsiver Interfaces macht es mir Freude, Kreativität mit technischem Know how zu verbinden. Besonders spannend finde ich, wie kleine Details wie flüssige Animationen oder eine klare Benutzerführung die Nutzererfahrung deutlich verbessern können.Derzeit absolviere ich eine Umschulung zum Fachinformatiker für Anwendungsentwicklung. Diese Phase gibt mir die Möglichkeit, meine Fähigkeiten systematisch auszubauen, Best Practices im Programmieren zu erlernen und praktische Erfahrung in App- und Spieleentwicklung zu sammeln. Auch wenn ich vorher in Spezialeinheiten tätig war, widme ich mich nun voll und ganz meiner Leidenschaft für Technologie und Softwareentwicklung.Ich liebe Herausforderungen, die meine Fähigkeiten erweitern sei es die Entwicklung kleiner RPG-Spiele, interaktiver Webanwendungen oder das Ausprobieren neuer Frameworks und Tools. Mein Ziel ist es, Software zu entwickeln, die sowohl funktional als auch benutzerfreundlich ist, und in Projekten mitzuwirken, in denen ich lernen, mich weiterentwickeln und einen echten Mehrwert schaffen kann.",
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
    p3Desc:"Eine Web-App, mit der du Anime finden und Trailer ansehen kannst",
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
