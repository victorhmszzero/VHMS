// Seleção de elementos principais
const sliderContainer = document.getElementById("slider");
const modalElements = {
  modal: document.getElementById("project-modal"),
  title: document.getElementById("modal-title"),
  description: document.getElementById("modal-description"),
  techIcons: document.getElementById("modal-tech-icons"),
  previewLink: document.getElementById("previewLink"),
  imagesContainer: document.getElementById("modal-slider"),
  indicatorsContainer: document.getElementById("modal-indicators"),
  closeBtn: document.querySelector(".close-btn"),
  prevBtn: document.getElementById("modal-prev-btn"),
  nextBtn: document.getElementById("modal-next-btn"),
};

let currentSlide = 0;
let currentImageIndex = 0;

// Função para preencher o slider
function fillSlider() {
  if (!sliderContainer || !Array.isArray(projects) || projects.length === 0) {
    console.error("Slider container ou projetos não definidos.");
    return;
  }

  const fragment = document.createDocumentFragment();
  projects.forEach((project, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
      ${project.html ? 
        project.html :
      ` 
        <div class="web-container">
          <img src="${project.images[0].src}" alt="Preview de ${project.title}" class="web-image" />
        </div>
        `
      }
      <div class="info">
        <div class="info-title-section">
          <h3><span class="h3-weight500">${project.title} - </span>${project.client}</h3>
          ${project.clientLogo && `<img class="info-logo"src="${project.clientLogo}"/>`}
        </div>
        <p>${project.description}</p>
        </div>
      <button class="btn btn--slide" data-index="${index}">Ver mais</button>
    `;
    fragment.appendChild(slide);
  });
  sliderContainer.appendChild(fragment);
  setupIndicators();
}

document.addEventListener("DOMContentLoaded", fillSlider);

// Função para criar indicadores no slider
function setupIndicators() {
  const indicatorsContainer = document.getElementById("portfolio-indicators");
  if (!indicatorsContainer) return;

  const slides = document.querySelectorAll(".slide");
  const fragment = document.createDocumentFragment();

  slides.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) indicator.classList.add("active");
    fragment.appendChild(indicator);
  });

  indicatorsContainer.appendChild(fragment);
  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll("#portfolio-indicators .indicator");
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Navegação no slider
const prevBtn = document.getElementById("slider-prev-btn");
const nextBtn = document.getElementById("slider-next-btn");
const slider = document.getElementById("slider");

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  resetVideos();
  updateIndicators();
}

nextBtn?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slider.children.length;
  updateSlide();
});

prevBtn?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
  updateSlide();
});

// Lógica do Modal
function openModal(index) {
  if (!projects[index]) {
    console.error("Projeto não encontrado para o índice:", index);
    return;
  }

  currentImageIndex = 0;
  const project = projects[index];

  // Preencher título, descrição e tecnologias
  modalElements.title.innerHTML = `
  <span class="h3-weight500">${project.title}</span> 
  <div>
    <span>${project.client}</span>
    ${project.clientLogo && `<img class="info-logo" src="${project.clientLogo}"/>`}
  </div>
  `;

  modalElements.description.innerHTML = project.content;
  modalElements.techIcons.innerHTML = "";

  // biome-ignore lint/complexity/noForEach: <explanation>
  project.technologies.forEach(tech => {
    const icon = document.createElement("span");
      icon.innerHTML = `<span><i class="fab ${tech.icon}"></i> ${tech.name}</span>`;
    modalElements.techIcons.appendChild(icon);
  });

  if (project.previewLink) { 
    modalElements.previewLink.innerHTML = `
      <a class="btn" href=""><i class="fa-solid fa-arrow-up-right-from-square"></i>  Visualizar</a>
    `;
  }


  // Preencher imagens do carrossel
  modalElements.imagesContainer.innerHTML = "";
  
  // biome-ignore lint/complexity/noForEach: <explanation>
    project.images.forEach((image) => {
    const modalSlide = document.createElement("div");
    modalSlide.classList.add("modal-slide");
    modalSlide.innerHTML = `
      <div class="slide">
         ${project.html ? 
         project.html : 
         ` 
          <div class="web-container">
            ${image.type === "web-image" ? `
            <img src="${image.src}" alt="${image.text}" class=${image.type} />
             `
            : ` 
              <div class="image-container">
                <img src="${image.src}" alt="${image.text}" class=${image.type} />
                <p class="modal-image-text">${image.text}</p>
              </div>
            ` }

          </div>
        `
        }
          ${image.type === "web-image" ? `<p class="modal-image-text">${image.text}</p> ` : ""}

      </div>`
    modalElements.imagesContainer.appendChild(modalSlide);
  });

  // Preencher indicadores
  modalElements.indicatorsContainer.innerHTML = "";
  if (project.images.length > 1){
  createIndicators(modalElements.indicatorsContainer, project.images.length);
  }
  // Atualizar imagem inicial e exibir modal
  updateImage(currentImageIndex);
  modalElements.modal.classList.add("visible");
}

function createIndicators(container, count) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (i === 0) indicator.classList.add("active");
    fragment.appendChild(indicator);
  }
  container.appendChild(fragment);
}

function updateImage(index) {
  resetVideos();
  const images = modalElements.imagesContainer.querySelectorAll(".modal-slide");
  const indicators = modalElements.indicatorsContainer.querySelectorAll(".indicator");

  images.forEach((img, i) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });

  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });

  // Exibir ou ocultar botões
  if (images.length <= 1) {
    modalElements.prevBtn.classList.add("btn-hidden");
    modalElements.nextBtn.classList.add("btn-hidden");
  } else {
    modalElements.prevBtn.classList.remove("btn-hidden");
    modalElements.nextBtn.classList.remove("btn-hidden");
  }
}

// Fechar Modal
modalElements.closeBtn?.addEventListener("click", () => {
  resetVideos();
  modalElements.modal.classList.remove("visible");
});

// Navegação de imagens no modal
modalElements.prevBtn?.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + projects[currentSlide].images.length) % projects[currentSlide].images.length;
  updateImage(currentImageIndex);
});

modalElements.nextBtn?.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % projects[currentSlide].images.length;
  updateImage(currentImageIndex);
});

// Delegação de evento para abrir o modal
sliderContainer?.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const index = Number.parseInt(event.target.dataset.index, 10);
    if (!Number.isNaN(index)) {
      openModal(index);
    }
  }
});

