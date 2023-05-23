const menu_burger = document.getElementById("menu-burger");
const menu = document.getElementById('menu');
const calendly = document.getElementById('calendly');

const menu_open = false;

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
  menu_burger.children[0].classList.toggle("menu__burger__first__open");
  menu_burger.children[0].classList.toggle("menu__burger__first__close");

  menu_burger.children[1].classList.toggle("menu__burger__second__open");
  menu_burger.children[1].classList.toggle("menu__burger__second__close");

  menu_burger.children[2].classList.toggle("menu__burger__third__open");
  menu_burger.children[2].classList.toggle("menu__burger__third__close");

  // if(menu_open) {
    menu.classList.toggle('hidden');
    calendly.classList.toggle('hidden')
  // }
});
