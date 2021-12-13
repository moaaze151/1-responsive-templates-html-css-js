let iconMenu = document.querySelector(".menu i");
let sidebar = document.querySelector(".sidebar");
let iconX = document.querySelector(".sidebar p");

iconMenu.addEventListener("click", () => {
  sidebar.style.right = "0px";
});

iconX.addEventListener("click", () => {
  if (window.innerWidth < 480) {
    sidebar.style.right = "-200px";
  } else if (window.innerWidth < 768) {
    sidebar.style.right = "-240px";
  } else {
    sidebar.style.right = "-330px";
  }
});
