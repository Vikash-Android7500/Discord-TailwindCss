// new Animation NavBar
const NavMenu = document.querySelector(".MenuBtn");
const hambergun = document.querySelector(".fa-bars");

hambergun.addEventListener("click", () => {
  hambergun.classList.toggle("fa-xmark");
  NavMenu.classList.toggle("active");
});
