/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
			"2xl": "1400px",
		},
		fontFamily: {
			primary: ["var(--font-red-hat)", "sans-serif"],	
		},
  	extend: {
		colors: {
			primary: "#1c1c22",
			accent: {
			DEFAULT: "#00ff99",
			hover: "#00e187",
			},
      	},
		keyframes: {
			"fill-left-to-right": {
				"0%": { transform: "translateX(0)" },
				"100%": { transform: "translateX(100%)" },
			}
		},
		animation: {
			"fill-left-to-right": "fill-left-to-right 1s linear infinite",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
