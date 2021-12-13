let head = document.querySelector("header");
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

window.addEventListener("scroll", () => {
  if (scrollY > innerHeight && head.classList[0] !== "head-generic") {
    head.style.cssText =
      "position:fixed;top:0;background:#333;padding-top:20px;padding-bottom:20px; left:0;right:0;";
  } else if(scrollY < innerHeight && head.classList[0] !== "head-generic"){
    head.style.cssText = "position:absolute;top:25px;background:transparent;";
  }
});
