import daisyui from 'daisyui'



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          DEFAULT: '#EEEEEE',
        }, 
        customYellow: {
          DEFAULT: '#FEE44C',
        },
        customBrown: {
          DEFAULT: '#593300',
        },
        customOrange: {
          DEFAULT: '#B80000',
        },
        customGreen: {
          DEFAULT: '#95DE00'
        }, 
        customBlue: {
          DEFAULT: '#084C6F'
        }
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}



