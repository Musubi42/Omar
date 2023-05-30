/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./public/**/*.html", "./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/assets/images/BG_header.png')",
        content: "url('/assets/images/BG_content.png')",
        "logo-oms": "url('/assets/images/Logo_OMS.png')",
        hr: "url('/assets/svg/HR.svg')",
        "button-border": "url('/assets/svg/button_border.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "lovelo-black": ["Lovelo_Black", "sans-serif"],
        "lovelo-bold": ["Lovelo_Bold", "arial"],
      },
      colors: {
        "active-button": "#06964C",
        "page-title": "#A30000",
      },
      height: {
        "header-logo": "105px",
      },
      flex: {
        1.5: "1.5 1.5 0%",
      },
    },
  },
  plugins: [],
};
