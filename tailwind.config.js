module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        poppins: ['Poppins'],
        raleway: ['Raleway'],
        inter: ['Inter'],
        'post-no-bills': ['Post No Bills'],
        'josefin-sans': ['Josefin Sans'],
        'post-no-bills-jaffna': ['Post No Bills Jaffna'],
      }
    },
    backgroundImage: {
      'hero': "url('/static/images/hero.png')",
    }
  },
  plugins: [],
}

// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
