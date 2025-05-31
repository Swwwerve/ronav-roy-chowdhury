import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.webp";
import project6 from "../assets/projects/project6.webp";

export const HERO_CONTENT = `
I am a driven software engineer with a passion for solving real-world challenges and driving business growth
via innovative solutions. Namely, I aim to leverage my technical expertise in cloud platforms like AWS and GCP, and ML tools
like TensorFlow and AWS SageMaker to develop scalable and efficient applications. I am also well-versed in full-stack
development, having worked with technologies like React and HTML/Tailwind CSS on the front-end, and SQL, PostgreSQL, Python,
and Java on the back-end to present my solutions. 
`;

export const ABOUT_TEXT = `
I am a software and biomedical engineering student at McMaster University with a passion for leveraging technology 
to create scalable solutions to real-world problems. My goal is to contribute meaningfully to the software industry 
by developing innovative systems that address complex challenges and drive positive change. Beyond coding, I enjoy 
staying active through sports like soccer, where I participate in university intramurals, as well as basketball, 
badminton, and volleyball. I also make time for the gym as well as watching movies like The Dark Knight and TV shows
like The Boys which are two of my favourites respectively.
`;

export const EXPERIENCES = [
  {
    year: "Apr 2024. - Present",
    role: "Associate Web Developer",
    company: "monstrARTity",
    description: `
    • Designed and optimized various website pages and features using HTML, CSS, and JavaScript to enhance user experience. \n
    • Implemented Python-based automation workflows leveraging GCP to streamline large-scale data analytics. \n
    • Boosted site SEO and performance by over 200% leveraging tools like Google Lighthouse and Google Tag Manager. \n
    • Ensured site reliability through comprehensive QA testing, focusing on API load balancing and scalability. \n
    • Collaborated in Agile sprints and frequent code reviews focusing on secure, maintainable code delivery.
    `,
    technologies: ["HTML/CSS", "JavaScript", "GCP", "Python", "Agile"]
  },
];

export const PROJECTS = [
  {
    title: "Smart Recipe",
    image: project6,
    link: 'https://github.com/Swwwerve/smartrecipe',
    description:
      "SMART RECIPE is a scalable, AI-driven recipe recommendation system built with Django, MongoDB, and advanced AI tools (Voyage AI, Claude). It leverages LLMs, retrieval-augmented generation, vector embeddings, and semantic search to deliver real-time, personalized recipe suggestions for users.",
    technologies: ["AWS RDS", "AWS KMS", "PostgreSQL", "SQL", "TypeScript", "React"],
  },
  {
    title: "NOVUS Cybersecurity",
    image: project1,
    link: 'https://github.com/GriDaniel/Engineering-Bois-MEC2024',
    description:
      "A fully functional YouTube-like platform, with a password management database with at-rest, and in-transit client-side and server-side encryption for secure username and password storage.",
    technologies: ["AWS RDS", "AWS KMS", "PostgreSQL", "SQL", "TypeScript", "React"],
  },
  {
    title: "NBA Player Classifier",
    image: project2,
    link: 'https://github.com/Swwwerve/NBA-Classification',
    description:
      "A web application that uses a pre-trained deep learning model to classify NBA players based on a given image.",
    technologies: ["Computer Vision", "Python", "Keras", "JavaScript", "Flask", "HTML/CSS"],
  },
  {
    title: "Scribbl.AI",
    image: project3,
    link: 'https://github.com/Skilledgamer101/oec',
    description:
      "A web application and pre-trained ML model using GCP Cloud Vision API help students with dysgraphia practice their handwriting skills with real-time feedback. ",
    technologies: ["HTML/CSS", "JavaScript", "GCP", "React", "Firebase"],
  },
  {
    title: "Space Biology: Model Zoo",
    image: project4,
    link: 'https://github.com/Achen2804/NasaTime',
    description:
      "A compilation of animal-based databases which aimed to determine the relation between space travel/flight and DNA-based changes using statistical analysis.",
    technologies: ["Python", "Selenium", "BeautifulSoup4", "HTML/CSS"],
  },
  {
    title: "P.E.P.P.E.R. AI",
    image: project5,
    link: 'https://github.com/patel-aaryan/P.E.P.P.E.R.',
    description:
      "A prompt-engineered chatbot that aimed to provide elderly individuals with companionship and mental health support during the COVID-19 pandemic.",
    technologies: ["HTML/CSS", "OpenAI API", "GCP", "Next.js", "TypeScript", "React"],
  },
];

export const CONTACT = {
  address: "Mississauga, ON, Canada",
  email: "roychr2@mcmaster.ca"
};
