document.getElementById("menuButton").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
});
