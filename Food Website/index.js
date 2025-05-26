document.addEventListener("DOMContentLoaded", function () {
  const togglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector(".navbar");

  togglers.forEach(btn => {
    btn.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  });
});
