/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Davis's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Davis Roldan Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Davis Roldan",
  logo_name: "DavisRoldan",
  nickname: "Full Stack Developer",
  subTitle:
    "Mi objetivo es crear soluciones innovadoras y eficientes que hagan la diferencia, aprovechando mi experiencia y dedicación en el desarrollo web.",
  resumeLink:
    "https://github.com/droldan2019310",
  portfolio_repository: "https://github.com/rol22672/portfolio-web",
  githubProfile: "https://github.com/droldan2019310",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/droldan2019310",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/davis-rold%C3%A1n-714740189/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:rol22672@uvg.edu.gt",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/ale_rldn_?igsh=emh0bThib2xrMG0z",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "DBA Manager",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Desarrollar sistemas de base de datos relacionales y no relacionales",
        "⚡ Manejo de MongoDB",
        "⚡ Manejo de mySQL, PostgreSQL, SQLServer, MariaDB",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          imageSrc: "mysql.png",
        },
        {
          skillName: "PostgreSQL",
          imageSrc: "postgreSQL.png",
        },
        {
          skillName: "MongoDB",
          imageSrc: "mongodb.png",
        },
        
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desarrollar web Responsive con React , Angular, Wordpress",
        "⚡ Desarrollar apliaciones móviles usando React Native y Kotlin",
        "⚡ Desarrollar API's, Backend con Node, Express, Laravel",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#EB4432",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
       
      ],
    },
    {
      title: "Arquitectura Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experiencia trabajando con múltiples plataformas Cloud",
        "⚡ Hosting y mantenimiento de websites en máquinas virtuales",
        "⚡ Experiencia trabajando con Docker, AWS, Firebase",
        "⚡ Experiencia configurando Dominios y DNS",
      ],
      softwareSkills: [
        
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
       
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
       
      ],
    },
    {
      title: "multiple Languages",
      fileName: "DesignImg",
      skills: [
        "⚡ Manejo de sintaxis de múltiples lenguajes",
        "⚡ Manejo de varias dependencias para Datos en Python como Pandas",
        "⚡ Manejo de lenguaje C para controlar componentes y microcontroladores",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          imageSrc: "java.png",
        },

        {
          skillName: "Python",
          imageSrc: "python.png",
        },
        
        {
          skillName: "C",
          imageSrc: "c.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Colegio Educativo Valle del Saber",
      subtitle: "Educación Básica",
      logo_path: "vds.png",
      alt_name: "Valle del saber",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ Estudié el ciclo básico donde pude aprender sobre lenguaje C y aprender lógica de programación",
        
      ],
      website_link: "https://colegiovalledelsaber.edu.gt/",
    },
    {
      title: "Centro Educativo Técnico Laboral Kinal",
      subtitle: "Perito en Informática",
      logo_path: "kinal.png",
      alt_name: "Fundación Kinal",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Graduado de uno de los colegios más prestigiosos del país con honores",
        "⚡ Certificación en Cisco y Redes",
        "⚡ Tecnologías aprendidas: Angular, Nodejs, JavaFX , MySQL, MongoDB",
      ],
      website_link: "https://www.kinal.org.gt/",
    },

    {
      title: "Universidad Del Valle",
      subtitle: "Ingeniero en Ciencias de la Computación",
      logo_path: "uvg.png",
      alt_name: "UVG",
      duration: "2021 - Actualmente",
      descriptions: [
        "⚡ Tomé cursos de React, lenguaje C, Lenguaje Hexadecimal, Kotlin",
        "⚡ Actualmente cursando tercer año de Ingeniería",
        "⚡ Curso de Ingles 2 años",
      ],
      website_link: "https://www.uvg.edu.gt/",
    },

  ],
};

const certifications = {
  certifications: [
    {
      title: "Cisco",
      subtitle: "Curso de redes",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.netacad.com/es",
      alt_name: "Cisco",
      color_code: "#8C151599",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experiencia Laboral",
  subtitle: "Programador",
  description:
    "He trabajado con empresas que buscan automatizaciones y sistemas personalizados para sus negocios. También he trabajado con algunas empresas para desarrollar sistemas totalmente personalizados y desde 0.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Desarrollador Freelance",
          company: "Webifica S.A.",
          company_url: "https://webifica.com/",
          logo_path: "webifica.png",
          duration: "Enero 2022 - Enero 2024",
          location: "Guatemala",
          description:
            "Desarrollador para nuevas funcionalidades, actualizaciones y mantenimiento del portal administrativo utilizado para generación de cobros, cotización y clientes, Trabajando con tecnologías como Angular y Laravel.",
          color: "#000000",
        },
        {
          title: "Desarrollador FullStack",
          company: "Bold",
          company_url: "https://bold.gt/",
          logo_path: "bold.png",
          duration: "Agosto 2023 - Actualmente",
          location: "Guatemala",
          description:
            "Trabajando en el diseño y desarrollo de sistemas personalizados y aplicaciones web, además de ser el encargado de la medición y conexión de servidores, Gestión de servidores, además del desarrollo de aplicaciones móviles con React Native.",
          color: "#0879bf",
        },
        
      ],
    },
    {
      title: "Prácticas",
      experiences: [
        {
          title: "Desarrollador Web",
          company: "Code Digital Marketing",
          company_url: "https://code.com.gt/",
          logo_path: "code.svg",
          duration: "Octubre 2019 - Diciembre 2019",
          location: "Guatemala , Campus TEC",
          description:
            "Desarrollo y gestión de sitios web con Wordpress, manejo de bootstrap, HTML, CSS.",
          color: "#000000",
        },
        {
          title: "Desarrollador Full Stack",
          company: "Webifica S.A.",
          company_url: "https://webifica.com/",
          logo_path: "webifica.png",
          duration: "Septiembre 2021 - Diciembre 2021",
          location: "Guatemala",
          description:
            "Trabajé en el desarrollo del portal administrativo tanto como en la arquitectura de base de datos como también trabajando como Full Stack con Laravel y Angular con NGX",
          color: "#ee3c26",
        },
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Mis proyectos utilizan las mejores tecnologías de la actualidad centrandome en un diseño agradable, funcionalidad rápida y eficiente.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpeg",
    description:
      "Estoy disponible por mis redes sociales por dudas o cualquier proyecto que se necesite desarrollar.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
