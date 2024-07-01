/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width : {
        "w-50" : "500px"
      },
      height : {
        "h-50":'80vh'
      },
     fontSize : {
      "smm" : '12px'
     },

    },
    

  },

  plugins: [],
}
