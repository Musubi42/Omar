// TODO : récupérer la location. Compter le nombre de / et trim le dernier, pour connaitre la profondeur
// Selon la profondeur, on va chercher le bon fichier dans le dossier parent

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar")
    ? document.getElementById("navbar")
    : null;

  if (navbar) {
    navbar.innerHTML =
      '<div id="menu" class="absolute z-20 top-0 h-full w-full hidden">' +
      '    <div class="bg-content bg-contain h-full"> ' +
      '      <div class="flex flex-col justify-center items-center h-full pt-12"> ' +
      "        <a href='../RDV/index.html' " +
      '          class="bg-header bg-cover mb-7 menu__button active:text-page-title" ' +
      "        > " +
      '          <span class="font-lovelo-bold font-black neon-text" ' +
      "            >PRENDRE RDV</span " +
      "          > " +
      "        </a> " +
      "        <a href='../tarifs/index.html' " +
      '          class="bg-header bg-cover mb-7 menu__button active:text-page-title" ' +
      "        > " +
      '          <span class="font-lovelo-bold font-black neon-text">TARIFS</span> ' +
      "        </a> " +
      "        <a href='../reseaux_sociaux/index.html' " +
      '          class="bg-header bg-cover mb-7 menu__button active:text-page-title" ' +
      "        > " +
      '          <span class="font-lovelo-bold font-black neon-text" ' +
      "            >RÉSEAUX SOCIAUX</span " +
      "          > " +
      "        </a> " +
      "        <a href='../avis/index.html' " +
      '          class="bg-header bg-cover mb-7 menu__button active:text-page-title" ' +
      "        > " +
      '          <span class="font-lovelo-bold font-black neon-text">AVIS</span> ' +
      "        </a> " +
      "      </div> " +
      "    </div> " +
      "  </div> ";
  }

  console.log(document.location.href.toString());
  if (
    document.location.href ==
    ("http://127.0.0.1:5501/public/index.html" ||
      "https://demo.omsbarber.fr" ||
      "https://omsbarber.fr")
  ) {
    console.log("hi");
    menu.classList.remove("hidden");
    menu.classList.remove("absolute");
    menu.classList.remove("top-0");
  }

  const header = document.getElementById("header")
    ? document.getElementById("header")
    : null;

  const pageName =
    document.location.href.split("/")[
      document.location.href.split("/").length - 2
    ];
  if (header) {
    header.innerHTML =
      ' <div class="bg-content bg-cover"> ' +
      '   <div class="flex py-5 content-center justify-center"> ' +
      '     <a href="../index.html" class="flex flex-1 justify-center content-center"> ' +
      "       <img " +
      '         src="../assets/images/Logo_OMS.png" ' +
      '         alt="Om&apos;S barber logo" ' +
      '         class="w-auto h-header-logo align-middle border-none" ' +
      "       /> " +
      "     </a> " +
      '     <div class="flex flex-[1.5_1.5_20px] h-fit mt-auto mb-auto bg-header bg-cover menu__button__border select-none text-center w-52 p-4 justify-center content-center outline-none border-black border-solid border-4"> ' +
      '       <span class="font-lovelo-bold font-black text-lg text-page-title"> ' +
      `         ${pageName} ` +
      "       </span> " +
      "     </div> " +
      '     <div class="flex-1 h-24 w-32 flex items-center justify-center right-0 top-0"> ' +
      "       <div " +
      '         id="menu-burger" ' +
      '         class="z-30 flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group cursor-pointer" ' +
      "       > " +
      '         <div class="menu__burger__sides__open h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300"></div> ' +
      '         <div class="menu__burger__middle__open h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300"></div> ' +
      '         <div class="menu__burger__sides__open h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300"></div> ' +
      "       </div> " +
      "     </div> " +
      "   </div> " +
      " </div> ";
  }

  //   document.getElementById("footer").innerHTML =
  //     "<footer class='p-4 pb-0 bg-white text-primary border-t-2 border-gray-200 text-xs xl:text-base'>" +
  //     "<div class='flex flex-col lg:flex-row mx-auto font-semibold justify-evenly text-center'>" +
  //     "<div class='lg:mb-0 px-2'>" +
  //     "<button class='leading-1 md:leading-9 hover:text-secondary' data-url='mention'>MENTIONS LÉGALES</button>" +
  //     "</div>" +
  //     "<div class='lg:mb-0 px-2'>" +
  //     "<button class='leading-1 md:leading-9 hover:text-secondary' data-url='faq'>FAQS</button>" +
  //     "</div>" +
  //     "<div class='lg:mb-0 px-2'>" +
  //     "<button class='leading-1 md:leading-9 hover:text-secondary' data-url='privacy'>POLITIQUE DE CONFIDENTIALITÉ</button>" +
  //     "</div>" +
  //     "<div class='lg:mb-0 px-2'>" +
  //     "<p class='leading-1 md:leading-9 font-regular text-[#1B3461] text-opacity-70'>CONRAD DESIGN 2022 TOUS DROITS RÉSERVÉS</p>" +
  //     "</div>" +
  //     "</footer>";
});
