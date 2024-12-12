const projectNull =[
  {
    id: 0,
    title: "",
    client: "",
    images: [
      "",
    ],
    description: "",
    content: "",
    technologies: [
      { name: "", icon: "" },
    ],
  },
]

const projects = [

  {
    id: 1,
    title: "Site Institucional",
    client: "Conieh Palestras",
    description: "Site institucional para destacar serviços e valores.",
    images: [
      { text: "Preview página inicial - versão desktop", src: "../src/projects/webDesign/images/web-2-conieh-preview-1.png", type:"web-image" },
      { text: "Prototipação das telas", src: "../src/projects/webDesign/images/web-2-conieh-preview-2.png", type:"image" },
    ],
    clientLogo: "../src/projects/webDesign/images/client-logo-conieh.png",
    content: 
    `
      <p>
      Projeto desenvolvido com base no manual de identidade visual da Conieh Palestras, resultando em um site institucional funcional e intuitivo.
      </p>
      <p>
      <strong>Destaques:</strong> design responsivo, otimização para SEO, foco na experiência do usuário, 4 telas principais e formulários personalizados para cotação e contato.
      </p>
    `,
    technologies: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" },
    ],
    previewLink: false
  },
  {
    id: 2,
    title: "Site Institucional",
    client: "Conieh Palestras",
    description: "Site institucional com blog, sistema personalizado e identidade visual sofisticada.",
    images: [
      { text: "1", src: "../src/projects/webDesign/images/web-1-conieh-preview-1Palestras.png"},
      { text: "2", src: "../src/projects/webDesign/images/web-1-conieh-preview-1Palestras.png"},
      { text: "3", src: "../src/projects/webDesign/images/web-1-conieh-preview-1Palestras.png"},
    ], 
    clientLogo: "../src/projects/webDesign/images/client-logo-conieh.png",
    // description: "Criação de uma landing page para um evento especial, focada em conversão e captação de leads.",
    content: 
    `
      <p>
        Antes de iniciar o projeto, o manual da marca foi retrabalhado para incorporar um tom moderno e sofisticado, resultando
        em um site institucional elegante e funcional.
      </p>
      <p>
        <strong>Destaques:</strong> branding, design responsivo, experiência do usuário, blog, otimização para SEO, sistema de cadastros personalizado, 6
        telas principais e formulários personalizados para cotação e contato.
      </p>
    `,
    technologies: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "MySql", icon: "iconoir-database" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" },
    ],
  },
    {
    id: 3,
    title: "Landing Page",
    client: "Evento X",
    images: [
      { text: "", src: "../src/projects/webDesign/images/web-1-conieh-preview-1.png"},
    ], 
    description: "Criação de uma landing page para um evento especial, focada em conversão e captação de leads.",
    clientLogo: "",
    content: "Desenvolvimento de um site institucional para a Conieh Palestras. O projeto incluiu design responsivo, experiência do usuário e SEO.",
    technologies: [
      { name: "Adobe XD", icon: "icons/adobe-xd-icon.png" },
      { name: "CSS", icon: "icons/css-icon.png" },
      { name: "JavaScript", icon: "icons/js-icon.png" },
    ],
  },
];