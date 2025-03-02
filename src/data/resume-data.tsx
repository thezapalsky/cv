import {
  GitHubIcon,
  LinkedInIcon,
  WebsiteIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Mikołaj Zapalski",
  initials: "MZ",
  location: "Gdansk, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Gdansk",
  about: "ML engineer with product building skills",
  summary:
    "Machine Learning engineer with five years of experience in tech startups, holding a Master's degree in IT & Econometrics. For the past two years, focused on integrating LLMs into applications, with expertise in RAG, GenAI (stable diffusion, style transfer), search, and recommender systems. Combines a strong statistical background with a keen interest in leveraging data for innovative solutions.",
  avatarUrl: "/ice_cropped.jpeg",
  contact: {
    email: "zapalski.mikolaj@gmail.com",
    tel: "+48517760111",
    social: [
      {
        name: "Website",
        url: "https://thezapalsky.github.io/",
        printUrl: "thezapalsky.github.io",
        icon: WebsiteIcon,
      },
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
      end: "02/2025",
      description: `• Designed and optimized LLM infrastructure to support core features like token management, retries, stream parsing, agent failure handling, and snapshot deployments. Integrated new features into the AI backend with a focus on reliability, scalability, type safety, and clean, maintainable code, driving significant product growth.
      • Authored research reports to guide data-driven decisions, implementing paragraph-level, hallucination-free citations, infinite-context document representation, advanced embeddings, output validation, and RAG pipelines tailored to legal datasets. Regularly applied SOTA research to enhance product capabilities, rigorously tested through a custom evaluation framework to ensure performance, reliability, and scalability.
      • Reduced the error rate from 2.5% to 0.02% (100x improvement), significantly improving reliability and user satisfaction. Collaborated with stakeholders in high-pressure 'war room' settings, iterating rapidly on user feedback to secure €500k+ deals.`,
    },
    {
      company: "GoE Wellness",
      badges: [],
      link: "https://apps.apple.com/ba/app/goe-wellness/id6450835692",
      title: "Data Scientist",
      start: "09/2023",
      end: "05/2024",
      description: `• Integrated and maintained machine learning models for a holistic wellness mobile app, including a personal LLM assistant, in-app content recommendation system, and semantic search engine.
      • Designed and deployed efficient ML data pipelines for user activity scoring and content retrieval modules, optimizing app performance.
      • Leveraged Python expertise (pandas, NumPy, PyTorch, FastAPI) to deploy machine learning models on AWS infrastructure, integrating OpenAI API and wearables API with MongoDB for advanced functionalities and user data management.`,
    },
    {
      company: "Epinote",
      link: "https://epinote.io/",
      badges: [],
      title: "Product Engineer",
      start: "07/2022",
      end: "09/2023",
      description: `• Designed, delivered, and owned numerous internal tech solutions (web scrapers, data pipelines, automation tools) that streamlined workflows and boosted efficiency.
      • Developed a global contractor payroll system, automating monthly processing for 400 employees ($50k/month), including transfers, invoicing, and P&L reporting.
      • Successfully implemented a 70% efficiency improvement through automation of contractors' legal paperwork pipeline.
      • Proposed the exploration of OpenAI API for data augmentation, investigating its potential to increase the size of the client's CRM database by 15%.
      • Utilized Python, Pandas, Jupyter Notebook, JavaScript, Zapier, and Google Sheets to deliver effective solutions.`,
    },
    {
      company: "Epinote",
      link: "https://epinote.io/",
      badges: ["Part-time"],
      title: "Data Analyst",
      start: "04/2020",
      end: "01/2022",
      description: `• Managed hundreds of multimodal datasets (vision, tabular, text, audio), ensuring data quality through robust annotation, cleaning, and validation processes.
      • Developed and implemented data quality checks to improve data integrity for machine learning projects, while iteratively optimizing the data annotation process, resulting in a 10x improvement in project delivery time.
      • Transitioned to a combined role encompassing project and operations management, ensuring smooth data pipeline execution and client satisfaction.
      • Led the annotation team, gathered and implemented client requirements and feedback, resulting in a significant improvement in model performance and accuracy.`,
    },
    {
      company: "International Paper",
      link: "https://www.internationalpaper.com/",
      badges: ["Part-time"],
      title: "IT Service Desk Analyst",
      start: "2019",
      end: "2021",
      description: `• Provided technical support and incident management for IT systems and peripherals, effectively resolving issues and monitoring & responding to alerts.
      • Prioritized tasks to minimize global infrastructure disruptions and enhance user experience.`,
    },
    {
      company: "Fern Flower",
      link: "https://www.linkedin.com/company/14782135/",
      badges: ["Part-time"],
      title: "Co-Founder | Gardening services",
      start: "2018",
      end: "2021",
      description: `• Seasonal activity in the garden and home automation sectors.`,
    },
  ],
  skills: [
    "Python",
    "OpenAI & Antrophic APIs",
    "FastAPI",
    "pydanticAI",
    "pandas",
    "numpy",
    "scikit-learn",
    "jupyter",
    "pytorch-transformers",
    "LangChain",
    "AWS",
    "Azure",
    "Docker",
    "git",
    "TypeScript",
  ],
  projects: [
    {
      title: "regalo",
      techStack: ["pydanticAI", "LLMs", "TypeScript"],
      description: "gift ideas generator & planner",
      link: {
        label: "github.com",
        href: "https://regalo.website/",
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
      techStack: ["SD/Flux", "LLMs", "LangChain"],
      description:
      "my attempt to create an Artifical Influencer, PoC built for a podcast episode",
      link: {
        label: "instagram.com",
        href: "https://www.instagram.com/skyblue.yoga/",
      },
    },
    {
      title: "2048-embd",
      techStack: ["word2vec", "BERT", "python"],
      description:
        "fundamentals of vector word embeddings meet classic 2048 game",
      link: {
        label: "github.com",
        href: "https://github.com/thezapalsky/2048-embd",
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
    // {
    //   title: "agency",
    //   techStack: ["Stable Diffusion", "ollama", "LLMs"],
    //   description: "PoC for a virtual influencer agency",
    //   link: {
    //     label: "github.com",
    //     href: "https://github.com/thezapalsky/agency/blob/main/poc.ipynb",
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
