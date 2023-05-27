// TODO : C'est assez cheap car si il faut plus de 500ms pour charger la navar, alors quand le code voudra get l'ID menu
// Celui-ci n'ixestera pas encore,
// Du coup je pourrais mettre en place un observer, qui dès qu'il verra l'id menu pourra lancer le reste du code

setTimeout(() => {
  const menu_burger = document.getElementById("menu-burger");
  const menu = document.getElementById("menu");
  const calendly = document.getElementById("calendly")
    ? document.getElementById("calendly")
    : false;
  const tarifs = document.getElementById("tarifs")
    ? document.getElementById("tarifs")
    : false;
  const reseaux = document.getElementById("reseaux")
    ? document.getElementById("reseaux")
    : false;
  const avis = document.getElementById("avis")
    ? document.getElementById("avis")
    : false;

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
    // menu_burger.children[0].classList.toggle("menu__burger__first__open");
    menu_burger.children[0].classList.toggle("menu__burger__first__close");

    // menu_burger.children[1].classList.toggle("menu__burger__second__open");
    menu_burger.children[1].classList.toggle("menu__burger__second__close");

    // menu_burger.children[2].classList.toggle("menu__burger__third__open");
    menu_burger.children[2].classList.toggle("menu__burger__third__close");

    // if(menu_open) {
    menu.classList.toggle("hidden");
    calendly ? calendly.classList.toggle("hidden") : null;
    tarifs ? tarifs.classList.toggle("hidden") : null;
    reseaux ? reseaux.classList.toggle("hidden") : null;
    avis ? avis.classList.toggle("hidden") : null;
    // calendly.classList.toggle("hidden");
    // }
  });

  const coupe_gallery_photo = document.querySelectorAll(
    '[aria-label="coupe_gallery"]'
  );

  // Listen on any click, so I can track click on the small coupe image
  document.body.addEventListener("click", (e) => {
    // Loop through each gallery, so every coupe type
    for (let i = 0; i < coupe_gallery_photo.length; i++) {
      // Loop on every big photo, which is equal of the number of small photo
      for (let j = 0; j < coupe_gallery_photo[i].children.length; j++) {
        const element = coupe_gallery_photo[i].children[j];

        // Hide the big photo that is visible
        if (
          e.target.id.split("_")[0] == element.id.split("_")[0] &&
          !element.classList.contains("hidden")
        ) {
          element.classList.add("hidden");
        }

        const small_photo = document.getElementById(
          e.target.id.split("_")[0].concat("_", j, "_small")
        );

        small_photo.classList.remove("ring-4");
        small_photo.classList.remove("border-blue-500");

        // Check if there is a match between the first two words of a big and small picture
        if (
          e.target.id.split("_")[0].concat("_", e.target.id.split("_")[1]) ==
          element.id.split("_")[0].concat("_", element.id.split("_")[1])
        ) {
          // Display a ring arround the photo that has been clicked
          e.target.classList.add("ring-4");
          e.target.classList.add("border-blue-500");

          // Make the one that has been clicked, appear has the big photo
          element.classList.add("visible");
          element.classList.remove("hidden");
        }
      }
    }
  });
}, 500);
