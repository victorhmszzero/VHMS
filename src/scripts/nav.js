
const navContainer = document.getElementById("categories");
const LINKSLIST = [
  {
    id: 1,
    text: "Sistemas e Apps",
    link: "https://victorhmszzero.github.io/VHMS/pages/appSystem",
  },
  {
    id: 2,
    text: "Web Design",
    link: "https://victorhmszzero.github.io/VHMS/pages/webDesign",
  },
  {
    id: 3,
    text: "Design Gráfico",
    link: "https://victorhmszzero.github.io/VHMS/pages/design.html",
  },
  {
    id: 4,
    text: "Motion Design",
    link: "https://victorhmszzero.github.io/VHMS/pages/motionDesign",
  },
]

function navMapper() {
  LINKSLIST.forEach((project, index) => {
    const link = document.createElement("li");
    // link.classList.add("category");
    link.innerHTML = `
      <a class="category ${project.active && "active"}" href="${project.link}">${project.text}</a>
    `;

    navContainer.appendChild(link);

  });
  setupIndicators();
}

document.addEventListener("DOMContentLoaded", navMapper);