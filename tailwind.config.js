/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   mycolor: {
      //     100: 'rgba(221, 34, 53, 0.5)',
      //     200: 'rgba(221, 34, 53, 1)'
      //   }
      // }, 
      
      // fontSize: {
        //   base: "18px",
        //   sm: "15px",
        //   xs: "12px"
        // },

        // margin: {
        //   1: "14px",
        //   2: "16px",
        //   3: "18px",
        //   4: "20px",
        // }

        container: {
          center: true,
        }

      },
      
      
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px"
    // },

    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // },

    
  },
  plugins: [],
}

