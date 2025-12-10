import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";

import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Tour Booking Website",
    description:
      "A full-stack travel booking site with user registration, login, search, booking, and reviews. Built to provide a seamless booking experience for travelers.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Medical Appointment System",
    description:
      "Interactive health platform enabling users to search for doctors, book appointments, and leave reviews. Features secure authentication and dynamic data rendering.",
    technologies: ["MERN Stack", "React.js", "Node.js", "Tailwind CSS"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Small Scale Web Apps",
    description:
      "Various small-scale web applications developed during my time at adcareIT, focusing on client requirements and user-friendly interfaces.",
    technologies: ["React", "Express.js", "Node.js"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Business Dashboard",
    description:
      "A conceptual dashboard for managing IT infrastructure and support tickets, inspired by my experience with Cisco Meraki and Freshworks.",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Corporate Landing Page",
    description:
      "Modern landing page design for corporate clients, focusing on brand identity and conversion optimization.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    siteUrl: "#",
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "IT Support Portal",
    description:
      "Interface design for an internal IT support portal to streamline ticket management and system monitoring.",
    technologies: ["Figma", "React", "CSS"],
    siteUrl: "#",
  },
];

export default portfolios;
