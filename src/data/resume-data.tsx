// import {
//   AmbitLogo,
//   BarepapersLogo,
//   BimLogo,
//   CDGOLogo,
//   ClevertechLogo,
//   ConsultlyLogo,
//   EvercastLogo,
//   Howdy,
//   JarockiMeLogo,
//   JojoMobileLogo,
//   Minimal,
//   MobileVikingsLogo,
//   MonitoLogo,
//   NSNLogo,
//   ParabolLogo,
//   TastyCloudLogo,
//   YearProgressLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mikołaj Zapalski",
  initials: "MZ",
  location: "Krakow, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Krakow",
  about:
    "Data Scientist with product builidng skills",
  summary:
    "Data Scientist with four years of experience in tech startups, holding a Master's degree in IT & Econometrics. Passionate about machine learning research since ~2018, combines a strong statistical background with a keen interest in leveraging data for innovative solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/19775889?s=400&u=0a3f7cf8547065f3597d08cc7136bc082b612700&v=4",
  personalWebsiteUrl: "https://thezapalsky.github.io",
  contact: {
    email: "zapalski.mikolaj@gmail.com",
    tel: "+48517760111",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/thezapalsky",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zapalski-mikolaj/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://twitter.com/yapalskz",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "AGH University of Krakow",
      degree: "Master's Degree | IT and Econometrics",
      start: "2020",
      end: "2022",
    },
    {
      school: "Technical University of Valencia",
      degree: "Student Exchange | Machine Learning & Data Science",
      start: "2022",
      end: "2022",
    },
    {
      school: "AGH University of Krakow",
      degree: "Bachelor's Degree | IT and Econometrics",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "GoE Wellness",
      badges: [],
      link: "https://www.goewellness.com/",
      title: "Data Scientist",
      start: "09/2023",
      end: "now",
      description:
        "Responsible for building and maintaining machine learning models for the holistic wellness mobile app (personal LLM assistant, in-app content recommendation system, semantic search engine). Designed and deployed ML data pipelines for users activity scoring and content-retrieval modules. Technologies: python, pandas, numpy, pytorch, juyter, fastAPI, AWS, openAI, mongoDB.",
    },
    {
      company: "Epinote",
      link: "https://epinote.io/",
      badges: ["Remote"],
      title: "Data Generalist (Analyst -> Product Engineer)",
      start: "04/2020",
      end: "09/2023",
      description:
        "Started as a Data Analyst responsible for handling hundreds of multimodal datasets (vision, tabular, text, audio) with strong emphasis on data quality assurance. Later joined product team where I designed and delivered dozens of internal tech solutions (web scrappers, API wrappers, data extractors, formatters, legal paperwork automations, ...). The most notable one being worldwide contractors payroll pipeline (monthly handling ~$50k for ~400 employees; data flow included transfers, invoicing and auto P&L reporting). Technologies: python, pandas, jupyter, CVAT, javascript, Zapier, GSheets.",
    },
    {
      company: "International Paper",
      link: "https://www.internationalpaper.com/",
      badges: ["Part-time"],
      title: "IT Service Desk Analyst",
      start: "2019",
      end: "2021",
      description:
        "Weekend, part-time work focused on supporting the IT Help Desk team in their daily tasks.",
    },
    {
      company: "Fern Flower",
      link: "https://www.internationalpaper.com/",
      badges: ["Part-time"],
      title: "Business Owner",
      start: "2018",
      end: "2021",
      description:
        "Seasonal activity in the horticultural, garden and smart-home sectors.",
    },
    
  ],
  skills: [
    "Python","pandas","numpy","OpenAI API","fastAPI","scikit-learn","pytorch-transformers", "jupyter", "MongoDB","AWS","Docker","git","graphite", "Google Sheets", "Apps Script", "Zapier"
  ],
  projects: [
    {
      title: "2048-embd",
      techStack: ["word2vec", "BERT"],
      description:
        "fundamentals of vector word embeddings meet classic 2048 game",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/2048-embd",
      }
    },
    // {
    //   title: "vid-upscale",
    //   techStack: ["video upscaling"],
    //   description:
    //     "analysis of SOTA video upscaling methods [WiP]",
    //     link: {
    //       label: "github.com",
    //       href: "https://github.com/thezapalsky/vid-upscale/",
    //     }
    // },
    {
      title: "skyblue.yoga",
      techStack: ["Stable Diffusion", "LLMs"],
      description:
        "my attempt to create an Artifical Influencer",
      link: {
        label: "instagram.com",
        href: "https://www.instagram.com/skyblue.yoga/",
      },
    },
    {
      title: "style transfer paper",
      techStack: ["python","pytorch", "tensorflow"],
      description:
        "2022 paper that discusses AI art just before the generative boom",
      link: {
        label: "github.com",
        href: "https://thezapalsky.github.io/witkacy/",
      },
    },
    {
      title: "rap-bot",
      techStack: ["python", "asyncio", "API"],
      description:
        "pre-LLM era chatbot for discord and meta's services with rap-style song writing feature",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/mikosz-bot",
      },
    },
    {
      title: "thezapalsky.github.io",
      techStack: ["HTML", "CSS", "JS", "GitHub Pages"],
      description:
        "personal static website serving as my 'business card'",
      link: {
        label: "github.com",
        href: "https://thezapalsky.github.io/",
      },
    },
    {
      title: "rec-sys-bt",
      techStack: ["python", "surprise", "numpy"],
      description:
        "recommender system for a movies database",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/rec-sys-bt"
      }
    },
    {
      title: "word-of-the-day",
      techStack: ["requests", "BeautifulSoup","cron"],
      description:
        "a simple python CLI app for language learning",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/word-of-the-day"
      }
    },
    // {
    //   title: "cv",
    //   techStack: ["Next.js", "Vercel"],
    //   description:
    //     "this page basically, I tried to learn Next.js & Vercel",
    //   link: {
    //     label: "github.com",
    //     href: "https://github.com/thezapalsky/cv",
    //   },
    // },
    {
      title: "older projects",
      techStack: ["jupyter", "analysis", "..."],
      description:
        "my GH profile with 2016-2023 projects ",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky?tab=repositories",
      },
    },
  ],
} as const;
