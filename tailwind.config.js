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
          "contact-banner":"url('https://aivolved.in/wp-content/uploads/2024/05/Untitled-design-92.png)"
      },
      height: {
        'custom': '50vh', // Defines custom height as 50vh
      },
      colors:{
 "text_primary":"#54595f",
 "text_secondary":"#cf2e2e",
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]};
