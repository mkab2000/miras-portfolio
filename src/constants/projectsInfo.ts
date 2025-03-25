import qrImg from "../assets/photos/works-QR.jpg"
import adviceImg from "../assets/photos/works-advice.jpg"
import { ProjectInfo } from "../store"
import resultsSummaryImg from "../assets/photos/works-resultsSummary.png"
import minesweeperImg from "../assets/photos/works-minesweeper.png"
import guideImg from "../assets/photos/works-guide.png"
import ageCalculatorImg from "../assets/photos/works-ageCalculator.png"
import calculatorImg from "../assets/photos/works-calculator.png"
import portfolioImg from "../assets/photos/works-portfolio.png"
import messageBoardImg from "../assets/photos/works-messageBoard.png"
import cyberpunkImg from "../assets/photos/works-cyberpunk.png"

export const projectsInfo: Record<string, ProjectInfo> = {
  cyberpunk: {
    projName: "cyberpunk",
    name: "Cyberpunk Companion App (Demo)",
    image: cyberpunkImg,
    type: "Web Page",
    tech: "Typescript, NextJs, Supabase",
    repos: "https://github.com/mkab2000/cyberpunk-companion",
    preview: "https://mkab-cyberpunk-companion.vercel.app",
    description: "Previous portfolio.",
  },
  portfolio: {
    projName: "portfolio",
    name: "Previous Portfolio",
    image: portfolioImg,
    type: "Web Page",
    tech: "HTML, CSS, JS",
    repos: "https://github.com/mkab2000/portfolio",
    preview: "https://mkab2000.github.io/portfolio/",
    description: "Previous portfolio.",
  },
  messageBoard: {
    projName: "messageBoard",
    name: "Interactive Message Board",
    image: messageBoardImg,
    type: "React App",
    tech: "Typescript, CSS",
    repos: "https://github.com/mkab2000/realtime-messageboard/tree/master",
    preview: "https://realtime-messageboard.vercel.app",
    description: "Interactive messageboard, unfortunately works no more, due to unsupported API.",
  },
  calculator: {
    projName: "calculator",
    name: "Calculator",
    image: calculatorImg,
    type: "Web App",
    tech: "HTML, CSS, JS",
    repos: "https://github.com/mkab2000/calculator",
    preview: "https://mkab2000.github.io/calculator/",
    description: "A fully functional calculator, with 3 different theme choices.",
  },
  ageCalculator: {
    projName: "ageCalculator",
    name: "Age Calculator",
    image: ageCalculatorImg,
    type: "Web Component",
    tech: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/Age-Calculator",
    preview: "https://mkab2000.github.io/Age-Calculator/",
    description: "An app that calculates exact amount of time since one's birthday.",
  },
  guide: {
    projName: "guide",
    name: "Interactive Guide",
    image: guideImg,
    type: "Web Page",
    tech: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/kokomi",
    preview: "https://mkab2000.github.io/kokomi/",
    description: "An interactive web-page guide for a character from a videogame.",
  },
  resultsSummary: {
    projName: "resultsSummary",
    name: "Results Summary",
    image: resultsSummaryImg,
    type: "Web Component",
    tech: "HTML, CSS",
    repos:
      "https://github.com/mkab2000/Result-Summary",
    preview: "https://mkab2000.github.io/Result-Summary/",
    description: "A practice component for operations with flexbox.",
  },
  QR: {
    projName: "QR",
    name: "QR Code Component",
    image: qrImg,
    type: "Web Component",
    tech: "HTML, CSS",
    repos: "https://github.com/mkab2000/QR-Code",
    preview: "https://mkab2000.github.io/QR-Code/",
    description: "A practice component for operations with flexbox.",
  },
  advice: {
    projName: "advice",
    name: "Advice App",
    image: adviceImg,
    type: "Web Component",
    tech: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/Advice-Generator",
    preview: "https://mkab2000.github.io/Advice-Generator/",
    description: "An app that uses a 3rd party API to generate random advice.",
  },
  minesweeper: {
    projName: "minesweeper",
    name: "Minesweeper",
    image: minesweeperImg,
    type: "Web Page",
    tech: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/minesweeper",
    preview: "https://mkab2000.github.io/minesweeper/",
    description: "A fully functional rendition of a popular game with a minor coloring scheme twist.",
  },
};