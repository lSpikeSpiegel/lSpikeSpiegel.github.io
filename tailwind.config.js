/** @type {import('tailwindcss').Config} */
const getSpacing = limit => {
  let space = {};
  for (let i = 0; i <= limit; i++) {
    space[i] = i / 10 + "rem";
  }
  return space;
};

const spacing80 = getSpacing(80);
const spacing400 = getSpacing(400);

module.exports = {
  important: true,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.3)',
        primaryWhite: 'rgb(249,249,249)',
        primary: '#008cd6',
        primaryDark: 'rgb(23,24,27)',
        secondaryDark: 'rgb(28,29,30)',
        thirdDark: "#333",
        primaryGray: "#666",
        secondaryGray: "#f2f2f2",
        thirdGray: "#999"
      },
      zIndex: {
        top: "999999"
      },
      spacing: spacing400,
      borderRadius: spacing80,
      fontSize: spacing80,
      borderWidth: spacing80,
      lineHeight: spacing80,
      letterSpacing: spacing80,
      filter: {
        normal: '20rem'
      }
    },
    backgroundColor: theme => theme("colors"),
    color: theme => theme("colors")
  },
  plugins: [],
}
