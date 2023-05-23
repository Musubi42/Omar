const menu_burger = document.getElementById("menu-burger");
let menu_burger_open = true;

const lines = [
  {
    activate: [(opacity = "0.5")],
    desactivate: [
      (transform = "rotate(45)"),
      (transform = "translate(0, 12px)"),
    ],
  },
  {
    activate: [(opcaity = "0.5")],
    desactivate: [(opcaity = "0")],
  },
  {
    activate: [(opcaity = "0.5")],
    desactivate: [
      (transform = "rotate(-45)"),
      (transform = "translate(0, -12px)"),
    ],
  },
];

menu_burger.addEventListener("click", (e) => {
  e.target.children[0].classList.toggle("menu__burger__first__open");
  e.target.children[0].classList.toggle("menu__burger__first__close");

  e.target.children[1].classList.toggle("menu__burger__second__open");
  e.target.children[1].classList.toggle("menu__burger__second__close");

  e.target.children[2].classList.toggle("menu__burger__third__open");
  e.target.children[2].classList.toggle("menu__burger__third__close");
});
