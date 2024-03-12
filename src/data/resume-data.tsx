import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mikolaj Zapalski",
  initials: "MZ",
  location: "Krakow, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Krakow",
  about:
    "Data Scientist focused on building products with extra attention to detail",
  summary:
    "IT and Econometrics graduate with interests in Data Science and Artificial Intelligence. 3+ years of working experience in startups, 2+ years in corporate and 3+ years of running my own business.",
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
      degree: "Master's Degree in IT and Econometrics",
      start: "2020",
      end: "2022",
    },
    {
      school: "AGH University of Krakow",
      degree: "Bachelor's Degree in IT and Econometrics",
      start: "2017",
      end: "2020",
    },
    {
      school: "Universitat Politècnica de València (UPV)",
      degree: "student exchange | machine learning & data science",
      start: "2022",
      end: "2022",
    },
  ],
  work: [
    {
      company: "GoE Wellness",
      badges: [],
      link: "https://www.goewellness.com/",
      title: "Data Scientist",
      start: "2023",
      end: "now",
      description:
        "Building next-generation holistic wellness platform for personal and professional use.",
    },
    {
      company: "Epinote",
      link: "https://epinote.io/",
      badges: ["Remote"],
      title: "Data Generalist",
      start: "2020",
      end: "2023",
      description:
        "[TODO] Building, maintaning and growing a data annotation platform and community around it",
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
      badges: [],
      title: "Business Owner",
      start: "2018",
      end: "2022",
      description:
        "Seasonal activity in the horticultural, garden and smart-home sectors.",
    },
    
  ],
  skills: [
    "Python","pandas","numpy","fastAPI","MongoDB","AWS","git"
  ],
  projects: [
    {
      title: "thezapalsky.github.io",
      techStack: ["GitHub Actions"],
      description:
        "my personal website",
      link: {
        label: "github.com",
        href: "https://thezapalsky.github.io/",
      },
    },
    {
      title: "(...)",
      techStack: ["tech stack"],
      description:
        "description",
      link: {
        label: "github.com",
        href: "https://thezapalsky.github.io/",
      },
    },
  ],
} as const;
