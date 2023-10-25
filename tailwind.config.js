/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-400":"#a2a2a2",
        "neutral-50":"#F9F9F9",
        "neutral-1000":"#000",
        "gray":"rgb(255,255,255,0.12)",
        "neutral-950":"#0a0a0a",
        "neutral-900":"#171717",
        "neutral-800":"#262626",
        "neutral-700":"#404040",
        "neutral-600":"#525252",
        "neutral-500":"#737373",
        "neutral-400":"#a2a2a2",
        "neutral-300":"#d3d3d3",
        "neutral-200":"#e4e4e4",
        "neutral-100":"#f4f4f4",
        "red-error":"#8b141a",
        "green-success":"#00be74",
        "card-fill":"#16181c",
        "searchbar-fill":"#212327",
        "blue-wash":"#rgba(117,190,239,0.2)",
        "twitter-blue":"#1d9bf0",
        "twitter-blue-disabled":"#1E5D87",
        "twitter-blue-hover":"#1871ca",
        "stroke":"rgba(29, 155, 240, 0.24)"
      },
      spacing:{
        34:"8.5rem",
        39:"9.7rem",
        50:"12.5rem",
        97:"24.5rem",
        98:"26rem",
        100:"28.5rem",
        109:"37rem",
      },
      fontFamily:{
        "px-regular":"Inter",
      },
    },  
      fontSize:{
        base:"1rem",
        "3xl":"1.625rem",
        inherit:"inherit"
      },
      borderRadius:{
        "4xl":"4rem",
        "5xl":"62px",
        "full":"9999px"
      },  
  },
  corePlugins: {
    preflight:false,
  },
};

