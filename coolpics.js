document.getElementById("menuButton").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
});

const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 1000) {
    mainNav.classList.remove("hide");
  } else {
    mainNav.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  const clickedImg = event.target.closest("img");
  if (!clickedImg) return;

  const src = clickedImg.getAttribute("src");
  const alt = clickedImg.getAttribute("alt");
  const fullSrc = src.split("-")[0] + "-full.jpeg";

  let modal = document.querySelector("dialog.viewer");
  if (!modal) {
    modal = document.createElement("dialog");
    modal.classList.add("viewer");
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  modal.showModal();

  modal.querySelector(".close-viewer").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });

  modal.addEventListener("close", () => {
    modal.remove();
  });
});
