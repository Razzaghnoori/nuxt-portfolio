export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      company: { name: "Holocron", link: "https://holocron.it" },
      position: "Senior Full Stack Engineer",
      duration: "Jun 2023-Jun 2024",
      image: "/images/holocron.jpg",
      tags: [],
      description:
        "I worked as a Senior Full Stack Software Engineer at Holocron in Pisa, Italy, from June 2023 to June 2024. During this time, I developed and launched four websites using diverse technologies like Laravel and Vue.js while collaborating with three different teams. I optimized more than seven microservices in an application to handle large volumes of data, ensuring robust performance and zero failures. I assumed the role of an English speaker and transitioned to communicating in Italian within four months. Additionally, I revitalized and optimized a five-year-old legacy project, exceeding client expectations and ensuring satisfaction.",
    },
    {
      id: 2,
      company: { name: "Olab Studio", link: "https://olab-studio.com/" },
      position: "Full Stack Engineer",
      duration: "Feb 2022-Jun 2023",
      image: "/images/olab.avif",
      tags: [],
      description:
        "At Olab Studio in Nettuno, Italy, I took on the role of a Full Stack Software Engineer from February 2022 to June 2023. I collaborated closely with the client to deliver impactful Django and React projects. By optimizing the website, I boosted conversions and engagement, working alongside a focused three-member team. One of my standout achievements was suggesting sales tactics to owners and developing the upsell page that drove 2,503 conversions in just 13 days—a testament to me being all in and fighting for your success.",
    },
    {
      id: 3,
      company: { name: "Amerandish", link: "https://amerandish.com/?lang=en" },
      position: "Software Engineer",
      duration: "Aug 2018-Aug 2019",
      image: "/images/amerandish.avif",
      tags: [],
      description:
        "Prior to that, I contributed as a Software Engineer at Amerandish in Tehran, Iran, from August 2018 to August 2019. I engineered a closed-domain question-answering system by building over 10 RESTful microservices using Python and Flask. Leveraging Telegram's API, I managed and processed over 200 GB of data to develop an Automatic Speech Recognition (ASR) model. Collaborating in a dynamic four-person team, I ensured progress and results were reported directly to the CTO and CEO, fostering clear communication and streamlined results.",
    },
    {
      id: 4,
      company: { name: "Amerandish", link: "https://amerandish.com/?lang=en" },
      position: "Machine Learning Engineer",
      duration: "Jan 2018-Jul 2018",
      image: "/images/amerandish2.avif",
      tags: [],
      description:
        "Earlier in my career, I excelled as a Machine Learning Engineer at Amerandish from January 2018 to July 2018. I spearheaded the development of an internal platform that automated model training, testing, and versioning, achieving a staggering 1000x reduction in ML task times. I also built a state-of-the-art Named Entity Recognition (NER) model powered by multilingual BERT. In addition, I designed and deployed two open-domain question-answering systems—one harnessing the power of knowledge graphs and the other integrating advanced information retrieval techniques to deliver precise results.",
    },
  ];
});
