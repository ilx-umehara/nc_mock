document
  .querySelector(".humburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".slide-menu").classList.toggle("active");
  });
