(() => {
    const refs = {
      openMenuBtn: document.querySelector("[mob-menu-open]"),
      closeMenuBtn: document.querySelector("[mob-menu-close]"),
      Menu: document.querySelector("[mob-menu]"),
    };
  
    function toggleMenu() {
      refs.modal.classList.toggle("is-hidden");
    }
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
  })();

