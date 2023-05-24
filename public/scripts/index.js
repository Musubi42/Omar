// TODO : C'est assez cheap car si il faut plus de 500ms pour charger la navar, alors quand le code voudra get l'ID menu
// Celui-ci n'ixestera pas encore,
// Du coup je pourrais mettre en place un observer, qui dès qu'il verra l'id menu pourra lancer le reste du code

setTimeout(() => {
  const menu_burger = document.getElementById("menu-burger");
  const menu = document.getElementById("menu");
  const calendly = document.getElementById("calendly");

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
    menu.classList.toggle("hidden");
    calendly.classList.toggle("hidden");
    // }
  });

  const coupe_gallery_photo = document.querySelectorAll(
    '[aria-label="coupe_gallery_photo"]'
  );
  console.log(coupe_gallery_photo);

  // Pour écouter simplement ce qu'il se passe sur les images,
  // Comme je ne peux pas dynamiquement écouter uniquement chaque gallerie d'image
  // Je vais prendre Body et verif si il ya bien un aria-label d'image
  // Si oui, grâce à son ID faire le toggle dynamiquement
  document.body.addEventListener("click", (e) => {
    console.log(e.target);
  });
}, 500);
