export function menuAbriuFechou() {
  const idMenuMobile = document.getElementById("idMenuMobile");
  const menuMobile = document.querySelector(".menuMobile");
  const navMobile = document.querySelector(".navMobile");
  const liNavMobile = document.querySelectorAll(".liNavMobile");

  idMenuMobile.addEventListener("click", () => {
    if (navMobile.classList.toggle("ativo")) {
      menuMobile.src = "./assets/img/Menu-fechado.webp";
      menuMobile.style.width = "2rem";
      menuMobile.style.height = "2rem";
    } else {
      menuMobile.src = "./assets/img/Menu-aberto.webp";
      menuMobile.style.width = "3rem";
      menuMobile.style.height = "3rem";
    }
  });

  liNavMobile.forEach((li) => {
    li.addEventListener("click", () => {
      if (navMobile.classList.toggle("ativo")) {
        menuMobile.src = "./assets/img/Menu-fechado.webp";
        menuMobile.style.width = "2rem";
        menuMobile.style.height = "2rem";
      } else {
        menuMobile.src = "./assets/img/Menu-aberto.webp";
        menuMobile.style.width = "3rem";
        menuMobile.style.height = "3rem";
      }
    });
  });
}
