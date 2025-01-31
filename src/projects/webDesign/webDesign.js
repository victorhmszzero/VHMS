const projectNull = [
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
      { text: "Preview página inicial - versão desktop", src: "src/projects/webDesign/images/web-2-conieh-preview-1.png", type: "web-image" },
      { text: "Overview principais telas", src: "src/projects/webDesign/images/web-2-conieh-preview-2.png", type: "image" },
      { text: "Notas 99 e 94 - Resultados Google PageSpeed", src: "src/projects/webDesign/images/web-2-conieh-preview-3.png", type: "image" },
    ],
    clientLogo: "src/projects/webDesign/images/client-logo-conieh.png",
    content:
      `
      <p>
        Desenvolvimento de um site institucional baseado no manual de identidade visual da Conieh Palestras, garantindo uma interface funcional e intuitiva alinhada com a imagem da marca.
      </p>
      <p><strong>Destaques:</strong></p>
      <ul>
        <li>Design responsivo.</li>
        <li>Otimização para SEO.</li>
        <li>Foco na experiência do usuário.</li>
        <li>4 telas principais.</li>
        <li>Formulários personalizados para cotação e contato.</li>
      </ul>
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
    title: "Site Institucional (Reformulação)",
    client: "Conieh Palestras",
    description: "Site institucional com blog, sistema personalizado e identidade visual sofisticada.",
    images: [
      { text: "Preview página inicial", src: "src/projects/webDesign/images/web-1-conieh-preview-1.png", type: "web-image" },
    ],
    clientLogo: "src/projects/webDesign/images/client-logo-conieh.png",
    content:
      `
      <p>
       Projeto de reformulação completo do site institucional da Conieh Palestras, partindo de um retrabalho no manual da marca para transmitir modernidade e sofisticação. O resultado é uma presença digital renovada e funcional, com novas funcionalidades e identidade visual aprimorada.
      </p>
      <p><strong>Destaques:</strong></p>
      <ul>
        <li>Branding atualizado e design elegante.</li>
        <li>Blog integrado.</li>
        <li>Sistema de cadastros personalizado.</li>
        <li>Design responsivo e otimizado para SEO.</li>
        <li>6 telas principais.</li>
        <li>Formulários personalizados para cotação e contato.</li>
      </ul>
    `,
    technologies: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" },
      { name: "Css", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "MySql", icon: "iconoir-database" },
    ],
  },
  {
    id: 3,
    title: "Landing Page Tande",
    client: "Conieh Palestras",
    clientLogo: "src/projects/webDesign/images/client-logo-conieh.png",
    images: [
      { text: "Preview página inicial", src: "src/projects/webDesign/images/web-3-tande-preview-1.png", type: "web-image" },
    ],
    description: "Landing page focada em conversões para o palestrante Tande.",
    content: `
      <p>    
        Criação de uma landing page estratégica com foco em conversões, destacando o palestrante e utilizando elementos como depoimentos, benefícios e seções persuasivas. Projetada para maximizar a geração de leads e garantir alta performance em dispositivos móveis.
      </p>
      <p><strong>Destaques:</strong></p>
      <ul>
        <li>Única tela responsiva e otimizada para todos os dispositivos.</li>
        <li>Estratégias de conversão, incluindo depoimentos e gatilhos.</li>
        <li>Métricas de conversão integradas para acompanhamento de resultados.</li>
      </ul>
    `,
    technologies: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" },
    ],
  },
  {
    id: 4,
    title: "Landing Page Black Friday",
    client: "Lojas Marabraz",
    clientLogo: "",
    images: [
      { text: "Preview página inicial", src: "src/projects/webDesign/images/web-4-marabraz-preview-1.png", type: "web-image" },
    ],
    description: "Landing page criada durante a campanha da Black Friday Marabraz.",
    content: `
      <p>
        Elaboração de uma landing page de estudo para a campanha Black Friday da Marabraz, com foco em impacto visual e alta conversão. Após desenvolver os banners promocionais, foi criado um redesign completo da página original, resultando em um layout atrativo e responsivo.
      </p>
      <p><strong>Destaques:</strong></p>
      <ul>
        <li>Redesign a partir do layout original.</li>
        <li>Única tela responsiva com forte apelo visual.</li>
        <li>Foco em impacto, usabilidade e conversão.</li>
      </ul>
    `,
    technologies: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
    ],
  },
];