
const navContainer = document.getElementById("categories");
const LINKSLIST = [
  {
    id: 1,
    text: "Web Design",
    link: "../../pages/webDesign.html",
  },
  {
    id: 2,
    text: "Design Gráfico",
    link: "../../pages/design.html",
  },
  {
    id: 2,
    text: "Motion Design",
    link: "../../pages/motionDesign.html",
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