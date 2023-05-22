/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/assets/images/BG_header.png')",
        content: "url('/assets/images/BG_content.png')",
        "logo-oms": "url('/assets/images/Logo_OMS.png')",
        hr: "url('/assets/svg/HR.svg')",
      },
    },
  },
  plugins: [],
};
