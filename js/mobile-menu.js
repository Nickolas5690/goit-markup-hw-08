// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.menu.classList.toggle("is-open");
//   }
// })();

(() => {
  
    const menuBtnRef = document.querySelector("[data-menu-button]");    
    const mobileMenuRef = document.querySelector("[data-menu]");
  

  menuBtnRef.addEventListener("click",() => {
    const expanded = 
      menuBtnRef.getAttribute("aria-epanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-epanded", !expanded);

    mobileMenuRef.classList.toggle("is-hidden");
  });
})();