export default defineEventHandler(() => {
  return [
    {
      id: 1,
      company: { name: "HolzLand Becker", link: "https://www.holzlandbecker.de/" },
      position: "Senior Frontend Engineer",
      duration: "Jan 2025 — Present",
      image: null,
      tags: ["Vue 3", "Nuxt 3", "E-commerce", "Performance"],
      description:
        "I own complex e-commerce work end to end, from reusable Vue and Nuxt foundations to product decisions and delivery. I helped ship an accessory cross-selling experience estimated at ~€1,700 per day in additional profit, reduced the client bundle by 250 KB through a server-side routing and redirect migration, and improved CLS from ~0.30 to below 0.05. I also introduced server-side product caching and mentor junior developers.",
    },
    {
      id: 2,
      company: { name: "Holocron", link: "https://holocron.it" },
      position: "Senior Full Stack Engineer",
      duration: "Jun 2023 — Jun 2024",
      image: "/images/holocron.webp",
      tags: ["Laravel", "Vue.js", "Microservices"],
      description:
        "I developed and launched four websites across three teams, optimised more than seven microservices for high-volume data, and modernised a five-year-old legacy project. I also moved from English to communicating in Italian within four months.",
    },
    {
      id: 3,
      company: { name: "Olab Studio", link: "https://olab-studio.com/" },
      position: "Full Stack Engineer",
      duration: "Feb 2022 — Jun 2023",
      image: "/images/olab.webp",
      tags: ["Django", "React", "Growth"],
      description:
        "I partnered closely with clients to build Django and React products. One upsell page I proposed and implemented produced 2,503 conversions in 13 days, turning a product insight into a measurable commercial result.",
    },
    {
      id: 4,
      company: { name: "Amerandish", link: "https://amerandish.com/?lang=en" },
      position: "Software Engineer",
      duration: "Aug 2018 — Aug 2019",
      image: "/images/amerandish.webp",
      tags: ["Python", "Flask", "NLP"],
      description:
        "I built more than ten RESTful microservices for a closed-domain question-answering system and processed over 200 GB of Telegram data while developing an automatic speech recognition model.",
    },
    {
      id: 5,
      company: { name: "Amerandish", link: "https://amerandish.com/?lang=en" },
      position: "Machine Learning Engineer",
      duration: "Jan 2018 — Jul 2018",
      image: "/images/amerandish2.webp",
      tags: ["Python", "BERT", "Machine Learning"],
      description:
        "I built an internal platform for model training, testing, and versioning that reduced ML task times by roughly 1,000×, alongside multilingual BERT NER and open-domain question-answering systems.",
    },
  ];
});
