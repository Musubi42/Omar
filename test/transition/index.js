const loader = document.querySelector(".loader");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  loader.classList.add("loader--active");
  window.setTimeout(function () {
    loader.classList.remove("loader--active");
  }, 1500);
});
window.onload = function () {
  loader.classList.remove("loader--active");
};
