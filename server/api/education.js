export default defineEventHandler((event) => {
  return [
    {
      id: 0,
      university: {
        name: "University of Pisa",
        city: "Pisa",
        country: "Italy",
        original_name: "Università di Pisa",
        link: "https://www.unipi.it/index.php/english",
        image: "/images/unipi.webp",
      },
      degree: "Master of Computer Science",
      duration: "Sep 2019-Oct 2022",
      image: "/images/master.webp",
      tags: [],
    },
    {
        id: 1,
        university: {
          name: "University of Tehran",
          city: "Tehran",
          country: "Iran",
          original_name: "دانشگاه تهران",
          link: "https://ut.ac.ir/en",
          image: "/images/ut.webp",
        },
        degree: "Bachelor of Computer Science",
        duration: "Sep 2013-Jul 2018",
        image: "/images/bachelor.webp",
        tags: [],
      },
  ];
});
