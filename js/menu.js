(() => {
    const refs = {
      openMenuBtn: document.querySelector("[mob-menu-open]"),
      closeMenuBtn: document.querySelector("[mob-menu-close]"),
      menu: document.querySelector("[mob-menu]"),
    };
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
  })();

