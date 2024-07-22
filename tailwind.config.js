/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-banner":
          "url('https://aivolved.in/wp-content/uploads/2024/05/Untitled-design-92.png')",
      },
      height: {
        custom: "50vh", // Defines custom height as 50vh
        "btn-hover": "25%", // Custom height for button hover border
      },
      colors: {
        text_primary: "#54595f",
        text_secondary: "#cf2e2e",
        "custom-gray": "rgb(28, 31, 30)", // Define custom gray for borders
      },
      borderWidth: {
        "1": "1px",
        "2": "2px",
      },
      transitionProperty: {
        border: "border-color, border-width",
      },
      width: {
        "btn-hover": "10%",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  
  ],
};
