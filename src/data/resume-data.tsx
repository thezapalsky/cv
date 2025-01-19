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
  location: "Gdansk, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Krakow",
  about: "data science generalist with product building skills",
  summary:
    "Data Science generalist with years of experience in tech startups, holding a Master's degree in IT & Econometrics. Worked with LLMs, RAG, experienced in GenAI (stable diffusion, style transfer), search & recommender systems. Combines a strong statistical background with a keen interest in leveraging data for innovative solutions.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/19775889?s=400&u=0a3f7cf8547065f3597d08cc7136bc082b612700&v=4",
  avatarUrl: "/ice_cropped.jpeg",
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
      {
        name: "X",
        url: "https://twitter.com/yapalskz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "AGH University of Krakow",
      degree: "Master's Degree | IT & Econometrics",
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
      degree: "Bachelor's Degree | IT & Econometrics",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Leya",
      badges: [],
      link: "https://www.leya.law/",
      title: "AI Research Engineer",
      start: "05/2024",
      end: "now",
      description:
        "• Built and optimised LLM infrastructure around core features, including token management, retries, stream parsing, agent failure handling, managing snapshot deployments, and more, contributing to product hockey stick growth.\n•	Authored comprehensive research reports to guide data-driven decisions, implementing mechanisms for paragraph-level, hallucination-free citations, infinite-context document representation, researched emdedding techniques, output validation and RAG pipelines on legal datasets; all measured through a hand-crafted evaluation system to ensure performance, reliability, and scalability.",
    },
    {
      company: "GoE Wellness",
      badges: [],
      link: "https://apps.apple.com/pl/app/goe-wellness/id6450835692",
      title: "Data Scientist",
      start: "09/2023",
      end: "05/2024",
      description:
        "• Developed and maintained machine learning models for a holistic wellness mobile app, including a personal LLM assistant, in-app content recommendation system and semantic search engine\n• Designed and deployed efficient ML data pipelines for user activity scoring and content retrieval modules, optimising app performance\n• Leveraged Python expertise (pandas, NumPy, PyTorch, FastAPI) to deploy machine learning models on AWS infrastructure, integrating OpenAI API and wearables API with MongoDB for advanced functionalities and user data management",
    },
    {
      company: "Epinote",
      link: "https://epinote.io/",
      badges: [],
      title: "Product Engineer",
      start: "07/2022",
      end: "09/2023",
      description:
        "• Designed, delivered and owned numerous internal tech solutions (web scrapers, data pipelines, automation tools) that streamlined workflows and boosted efficiency\n• Led the development of a global contractors' payroll pipeline, automating monthly processing for ~400 employees (~$50k) and integrating transfers, invoicing, and P&L reporting\n• Successfully implemented 70% efficiency improvement through automation of contractors' legal paperwork pipeline\n• Proposed the exploration of OpenAI API for data augmentation, investigating its potential to increase the size of the client's CRM database by 15%\n• Utilised Python, Pandas, Jupyter Notebook, Javascript, Zapier, and Google Sheets to deliver effective solutions",
    },
    {
      company: "Epinote",
      link: "https://epinote.io/",
      badges: [],
      title: "Data Analyst",
      start: "04/2020",
      end: "01/2022",
      description:
        "• Managed hundreds of multimodal datasets (vision, tabular, text, audio), ensuring data quality through robust annotation, cleaning and validation processes.\n• Developed and implemented data quality checks to improve data integrity for machine learning projects\n• Iteratively optimised data annotation process which led to 10x improvement in project delivery time\n• Transitioned to a combined role encompassing project and operations management, ensuring smooth data pipeline execution and client satisfaction\n• Led the annotation team, gathered and implemented client requirements and feedback, resulting in a significant improvement in model performance and accuracy",
    },
    {
      company: "International Paper",
      link: "https://www.internationalpaper.com/",
      badges: ["Part-time"],
      title: "IT Service Desk Analyst",
      start: "2019",
      end: "2021",
      description:
        "• Provided technical support and incident management for IT systems and peripherals, effectively resolving issues, monitoring & responding to alerts\n• Prioritizing tasks to minimize global infrastructure disruptions and enhance user experience",
    },
    {
      company: "Fern Flower",
      link: "https://www.linkedin.com/company/14782135/",
      badges: ["Part-time"],
      title: "Co-Founder | Gardening services",
      start: "2018",
      end: "2021",
      description:
        "• Seasonal activity in the garden and home automation sectors",
    },
  ],
  skills: [
    "Python",
    "pandas",
    "numpy",
    "OpenAI API",
    "fastAPI",
    "scikit-learn",
    "pytorch-transformers",
    "jupyter",
    "LangChain",
    "MongoDB",
    "AWS",
    "Docker",
    "git",
    "graphite",
    "Apps Script",
    "Zapier",
  ],
  projects: [
    {
      title: "regalo",
      techStack: ["python", "LLMs", "TypeScript"],
      description: "gift ideas generator & planner",
      link: {
        label: "github.com",
        href: "https://www.loom.com/share/1a97648e449943e6a3098b77197ccce0",
      },
    },
    {
      title: "style transfer paper",
      techStack: ["python", "pytorch", "tensorflow"],
      description:
        "2022 master's thesis that discusses GenAI art just before the generative boom",
      link: {
        label: "github.com",
        href: "https://thezapalsky.github.io/witkacy/",
      },
    },
    {
      title: "recommender sys paper",
      techStack: ["python", "surprise", "numpy"],
      description:
        "2020 bachelor's thesis that compares different recommender systems for a movie database",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/rec-sys-bt",
      },
    },
    {
      title: "polish rap bot",
      techStack: ["python", "asyncio", "API"],
      description:
        "pre-LLM era chatbot for discord and meta's services with rap-style song writing feature",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/mikosz-bot",
      },
    },
    {
      title: "@skyblue.yoga",
      techStack: ["Stable Diffusion", "LLMs"],
      description:
        "my attempt to create an Artifical Influencer, PoC built for a podcast episode",
      link: {
        label: "instagram.com",
        href: "https://www.instagram.com/skyblue.yoga/",
      },
    },
    {
      title: "agency",
      techStack: ["Stable Diffusion", "ollama", "LLMs"],
      description: "PoC for a virtual influencer agency",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/agency/blob/main/poc.ipynb",
      },
    },
    // {
    //   title: "2048-embd",
    //   techStack: ["word2vec", "BERT"],
    //   description:
    //     "fundamentals of vector word embeddings meet classic 2048 game",
    //   link: {
    //     label: "github.com",
    //     href: "https://github.com/thezapalsky/2048-embd",
    //   },
    // },
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
    // {
    //   title: "thezapalsky.github.io",
    //   techStack: ["HTML", "CSS", "JS", "GitHub Pages"],
    //   description:
    //     "personal static website serving as my 'business card'",
    //   link: {
    //     label: "github.com",
    //     href: "https://thezapalsky.github.io/",
    //   },
    // },
    // {
    //   title: "word-of-the-day",
    //   techStack: ["requests", "BeautifulSoup","cron"],
    //   description:
    //     "a simple python CLI app for language learning",
    //   link: {
    //     label: "github.com",
    //     href: "https://github.com/thezapalsky/word-of-the-day"
    //   }
    // },
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
    // {
    //   title: "older projects",
    //   techStack: ["jupyter", "analysis", "..."],
    //   description:
    //     "my GH profile with 2016-2023 projects ",
    //   link: {
    //     label: "github.com",
    //     href: "https://github.com/thezapalsky?tab=repositories",
    //   },
    // },
  ],
} as const;
