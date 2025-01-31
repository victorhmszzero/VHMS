
const navContainer = document.getElementById("categories");
const LINKSLIST = [
  {
    id: 1,
    text: "Sistemas e Apps",
    link: "appSystem.html",
  },
  {
    id: 2,
    text: "Web Design",
    link: "webDesign.html",
  },
  {
    id: 3,
    text: "Design Gráfico",
    link: "design.html",
  },
  {
    id: 4,
    text: "Motion Design",
    link: "motionDesign.html",
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