// Preenchendo o slider com os projetos
const sliderContainer = document.getElementById("slider");
function fillSlider() {
  projects.forEach((project, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    slide.innerHTML = `
      <div class="web-container">
         <img src="${project.images[0]}" alt="Preview de ${project.title}" class="web-image" />
       </div>
      <div class="info">
        <h3><span class="h3-weight500">${project.title} - </span>${project.client}</h3>
        <p>${project.description}</p>
        <button class="btn" onclick="openModal(${index})">Ver mais</button>
      </div>
    `;

    sliderContainer.appendChild(slide);
    
  });
  getSliders();
}

document.addEventListener("DOMContentLoaded", fillSlider);

// Carrossel Logics
const slider = document.querySelector('.slider');
const prevBtn2 = document.querySelector('.car-prev-btn');
const nextBtn2 = document.querySelector('.car-next-btn');

let currentSlide = 0;

function updateSlide () {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
};

nextBtn2.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slider.children.length;
  updateSlide();
});

prevBtn2.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
  updateSlide();
});



// Indicators Logic
function getSliders(){
  const indicatorsContainer = document.querySelector(".indicators");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  // Adiciona indicadores de slides
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicatorsContainer.appendChild(indicator);
  }
  updateIndicators();
}

function updateIndicators() {
  const indicators2 = document.querySelectorAll(".indicator");
  indicators2.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Modal Logic
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-slider");
const modalDescription = document.getElementById("modal-description");
const techContainer = document.querySelector(".tech-icons");
//
let currentImageIndex = 0;
// Função para preencher o carrossel de imagens dentro do modal
function openModal(index) {
  currentImageIndex = 0;

  const project = projects[index];
  
  // Preencher título, descrição e tecnologias
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.content;

  // Preencher ícones das tecnologias
  const techIcons = document.getElementById("modal-tech-icons");
  techIcons.innerHTML = "";

  // biome-ignore lint/complexity/noForEach: <explanation>
  project.technologies.forEach(tech => {
    const icon = document.createElement("span");
      icon.innerHTML = `<span><i class="fab ${tech.icon}"></i> ${tech.name}</span>`;
    techIcons.appendChild(icon);
  });

  // Preencher imagens do carrossel
  const modalImagesContainer = document.querySelector(".modal-slider");
  modalImagesContainer.innerHTML = ""; // Limpar as imagens atuais
  project.images.forEach((image, idx) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = `${project.title} - Imagem ${idx + 1}`;
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("modal-image-container");
    imgContainer.appendChild(imgElement);
    modalImagesContainer.appendChild(imgContainer);
  });

  // Preencher os indicadores
  const modalIndicatorsContainer = document.querySelector(".modal-indicators");
  modalIndicatorsContainer.innerHTML = ""; // Limpar os indicadores atuais
  project.images.forEach((image, idx) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (idx === 0) indicator.classList.add("active"); // Adicionar a classe "active" na primeira imagem
    modalIndicatorsContainer.appendChild(indicator);
  });

  // Mostrar a primeira imagem
  updateImage(currentImageIndex);

  // Exibir o modal
  modal.classList.add("visible");
}

document.querySelector(".close-btn").addEventListener("click", () => {
  modal.classList.remove("visible");
});




const modalBtnPrev = document.querySelector(".modal-prev-btn");
const modalBtnNext =document.querySelector(".modal-next-btn");

modalBtnPrev.addEventListener("click", () => {
  const images = document.querySelectorAll(".modal-slider img");
  currentImageIndex =  (currentImageIndex - 1 + images.length) % images.length;
  updateImage(currentImageIndex);
});

modalBtnNext.addEventListener("click", () => {
  const images = document.querySelectorAll(".modal-slider img");
  currentImageIndex =  (currentImageIndex + 1) % images.length;
  updateImage(currentImageIndex);
});


function updateImage(index) {
  const images = document.querySelectorAll(".modal-slider img");
  const indicators = document.querySelectorAll(".modal-indicators .indicator"); 
  if (images.length <= 1){
    modalBtnPrev.classList.add("btn-hidden");
    modalBtnNext.classList.add("btn-hidden");
    indicators.forEach((indicator, i) => {
      indicator.classList.add("btn-hidden");
    });
  }
  
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
}