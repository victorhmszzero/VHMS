const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselContent = document.querySelector(".carousel-content");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth;

// Adiciona indicadores de slides
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll(".indicator");

updateIndicators();

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  console.log("Slide atual:", currentIndex);
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  console.log("Slide atual:", currentIndex);
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * slideWidth;
  carouselContent.style.transform = `translateX(${offset}px)`;
  updateIndicators();

  if (resetVideos() == null) {
    return;
  } else {
    resetVideos();
  }
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Captura o elemento da miniatura do vídeo
var videoThumb = document.getElementById("videoThumb");

// Captura o elemento do iframe do vídeo
var videoIframe = document.getElementById("videoIframe");

// Adiciona um evento de clique à miniatura do vídeo
videoThumb.addEventListener("click", function () {
  // Alterna a visibilidade entre a miniatura e o iframe do vídeo
  videoThumb.style.display = "none";
  videoIframe.style.display = "block";
});
