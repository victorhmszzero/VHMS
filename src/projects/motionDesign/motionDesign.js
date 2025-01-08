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
  // Dia das Crianças
  {
    id: 3,
    title: "Dia das Crianças",
    client: "Lojas Marabraz",
    clientLogo: "",
    html: `
      <div class="video-container">
        <img 
          src="../src/projects/motionDesign/images/2024-video1-marabraz.png" 
          alt="Thumbnail do Vídeo" 
          class="thumbnail" 
          style="cursor: pointer; width: 100%; height: auto;"
        />
        <iframe 
          class="video-url" 
          src="https://drive.google.com/file/d/1_3yxW9HnTuq1GV38gLoPridt5pDtWhd1/preview"
          style="display: none;"
          allow="autoplay"
          height="480" 
          >
        </iframe>
      </div>
    `,
    images: [
      { text: "", src: "https://victorhmszzero.github.io/VHMS/assets/BannerMotiveaçãoPalestras.png" },
    ],
    description: "Desenvolvimento de um site institucional para a Conieh Palestras.",
    content: `<p>Produção de vídeo animado comemorativo para o Dia das Crianças, com base no briefing enviado. O trabalho incluiu animações, ambientação temática, legendas estáticas e a criação de uma thumbnail, além do tratamento de imagens para realce do material final.</p>
    <p><strong>Destaques:</strong></p>
    <ul>
    <li>Animações temáticas infantis.</li>
    <li>Ambientação criativa e divertida.</li>
    <li>Tratamento de imagens e criação de thumbnail personalizada.</li>
    </ul>
    `,
    technologies: [
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "Premiere", icon: "iconoir-media-video" }
    ],
  },
  // Halloween da Mara
  {
    id: 3,
    title: "Halloween da Mara",
    client: "Lojas Marabraz",
    clientLogo: "",
    html: `
      <div class="video-container">
        <img 
          src="../src/projects/motionDesign/images/2024-video2-marabraz.png" 
          alt="Thumbnail do Vídeo" 
          class="thumbnail" 
          style="cursor: pointer; width: 100%; height: auto;"
        />
        <iframe 
          class="video-url" 
          src="https://drive.google.com/file/d/1PINXovCZMsgxwMdvFVMghcl5CcfQBdTN/preview"
          style="display: none;" 
          allow="autoplay"
          height="480" 
          >
        </iframe>
      </div>
    `,
    images: [
      { text: "", src: "https://victorhmszzero.github.io/VHMS/assets/BannerMotiveaçãoPalestras.png" },
    ],
    description: "Desenvolvimento de um site institucional para a Conieh Palestras.",
    content: `<p>Produção de vídeo animado especial de Halloween, desenvolvido a partir do briefing enviado. O projeto incluiu animações, ambientação temática e a criação de uma thumbnail. O tratamento de imagens foi realizado para criar uma atmosfera imersiva e visualmente impactante.</p>
      <p><strong>Destaques:</strong></p>
      <ul>
      <li>Animações temáticas de Halloween.</li>
      <li>Ambientação sombria e criativa.</li>
      <li>Tratamento de imagens e thumbnail personalizada.</li>
      </ul>
      `,
    technologies: [
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "Figma", icon: "iconoir-figma" },
      { name: "HTML", icon: "iconoir-html5" },
    ],
  },
  // Batalha de Móveis
  {
    id: 3,
    title: "Batalha de Móveis",
    client: "Lojas Marabraz",
    clientLogo: "",
    html: `
      <div class="video-container">
        <img 
          src="../src/projects/motionDesign/images/2024-video3-marabraz.png"
          alt="Thumbnail do Vídeo" 
          class="thumbnail" 
          style="cursor: pointer; width: 100%; height: auto;"
        />
        <iframe 
          class="video-url" 
          src="https://drive.google.com/file/d/12g1qkJ9MXFMCcvE3WIzqiH_8whYXO2YV/preview"
          style="display: none;" 
          allow="autoplay"
          height="480" 
          >
        </iframe>
      </div>
    `,
    images: [
      { text: "", src: "https://victorhmszzero.github.io/VHMS/assets/BannerMotiveaçãoPalestras.png" },
    ],
    description: "Desenvolvimento de um site institucional para a Conieh Palestras.",
    content: `
    <p>Criação de vídeo animado para a tag exclusiva &quot;Batalha de Móveis&quot; da Marabraz, com base no briefing enviado. O vídeo apresentou animações e ambientações que destacaram os móveis em batalha, acompanhadas de uma thumbnail personalizada. O tratamento de imagens foi usado para realçar os produtos e reforçar o impacto visual.</p>
      <p><strong>Destaques:</strong></p>
      <ul>
      <li>Animações dinâmicas e temáticas.</li>
      <li>Ambientação envolvente para destacar os produtos.</li>
      <li>Tratamento de imagens e produção de thumbnail personalizada.</li>
      </ul>

    `,
    technologies: [
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "Figma", icon: "iconoir-figma" },
      { name: "HTML", icon: "iconoir-html5" },
    ],
  },
  // PFI Escola SAGA
  {
    id: 3,
    title: "PFI Escola SAGA",
    client: "Giovanni Varani",
    clientLogo: "",
    html: `
      <div class="video-container">
        <img 
          src="../src/projects/motionDesign/images/2024-PFISAGA.png"
          alt="Thumbnail do Vídeo" 
          class="thumbnail" 
          style="cursor: pointer; width: 100%; height: auto;"
        />
        <iframe 
          class="video-url" 
          src="https://drive.google.com/file/d/18j5PQSupwuomPAuLsf8Pno-IsNz05hwY/preview"
          style="display: none;" 
          allow="autoplay"
          height="480" 
          >
        </iframe>
      </div>
    `,
    images: [
      { text: "", src: "https://victorhmszzero.github.io/VHMS/assets/BannerMotiveaçãoPalestras.png" },
    ],
    description: "Desenvolvimento de um site institucional para a Conieh Palestras.",
    content: `
        <p>Produção de uma vinheta animada para a logo &quot;PFI Escola SAGA - Santo Amaro&quot;, atendendo à identidade visual definida. O trabalho foi concebido para ser dinâmico e impactante, com trilha sonora escolhida para complementar a proposta.</p>
        <p><strong>Destaques:</strong></p>
        <ul>
          <li>Animação alinhada à identidade visual.</li>
          <li>Dinamismo e impacto visual.</li>
        </ul>
    `,
    technologies: [
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "Figma", icon: "iconoir-figma" },
      { name: "HTML", icon: "iconoir-html5" },
    ],
  },
  //Reels MBa do Palestrante
  {
    id: 2,
    title: "Reels Social Media",
    client: "MBA do Palestrante",
    clientLogo: "",
    html: `
      <div class="video-container">
        <img 
          src="../src/projects/motionDesign/images/2023-video1-MBAdoPalestrante.png" 
          alt="Thumbnail do Vídeo" 
          class="thumbnail" 
          style="cursor: pointer; width: 100%; height: auto;"
        />
        <iframe 
          class="video-url" 
          src="https://drive.google.com/file/d/1dghMyFOJe0pMsuOz70W5SRoNztB696HA/preview" 
          style="display: none;" 
          allow="autoplay"
          height="480" 
          >
        </iframe>
      </div>
    `,
    images: [
      { text: "", src: "https://victorhmszzero.github.io/VHMS/assets/BannerMotiveaçãoPalestras.png" },
    ],
    description: "Desenvolvimento de um site institucional para a Conieh Palestras.",
    content: `
    <p>Edição do vídeo &quot;A forma ideal de se apresentar como um palestrante profissional&quot;, utilizando arquivos brutos. O trabalho incluiu transições dinâmicas, legendas estilizadas e visuais que contextualizam o tema, oferecendo dicas práticas para seguidores interessados em se profissionalizar como palestrantes. Foi criada uma thumbnail alinhada ao conteúdo do vídeo.</p>
    <p><strong>Destaques:</strong></p>
    <ul>
    <li>Transições dinâmicas e fluídas.</li>
    <li>Legendas estilizadas para engajamento.</li>
    <li>Criação de visuais contextualizados e thumbnail personalizada.</li>
    </ul>
    `,
    technologies: [
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "Premiere", icon: "iconoir-media-video" }
    ],
  },
  //Reels Recorte de Live
  {
    id: 1,
    title: "Reels Recorte de Live",
    client: "Motiveação Palestras",
    clientLogo: "",
    html: `
      <div class="video-container">
      <img 
        src="../src/projects/motionDesign/images/2023-video1-MotiveacaoPalestras.png" 
        alt="Thumbnail do Vídeo" 
        class="thumbnail" 
        style="cursor: pointer; width: 100%; height: auto;"
      />
      <iframe 
        class="video-url" 
        src="https://drive.google.com/file/d/1TbrZUgRvz3PjwrpujvioPIq6irSoZmDE/preview" 
        style="display: none;" 
        allow="autoplay"
        height="480" 
        >
      </iframe>
      </div>
    `,
    images: [
      { text: "", src: "https://victorhmszzero.github.io/VHMS/assets/BannerMotiveaçãoPalestras.png" },
    ],
    description: "Desenvolvimento de um site institucional para a Conieh Palestras.",
    content: `
    <p>Edição do reels intitulado &quot;Não seja refém do passo a passo&quot;, com base em um corte selecionado de uma live. O vídeo foi editado para transmitir uma mensagem motivacional e impactante, com legendas estáticas que reforçam o ideal inspirador. Além disso, foi criada uma thumbnail personalizada para acompanhar o vídeo nas redes sociais.</p>
      <p><strong>Destaques:</strong></p>
      <ul>
      <li>Seleção de cortes estratégicos.</li>
      <li>Legendas estáticas para reforço visual.</li>
      <li>Produção de thumbnail personalizada.</li>
      </ul>
    `,
    technologies: [
      { name: "Photoshop", icon: "iconoir-adobe-photoshop" },
      { name: "Premiere", icon: "iconoir-media-video" }
    ],
  },
];