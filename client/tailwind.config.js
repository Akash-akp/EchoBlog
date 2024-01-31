/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				lightBgColor: "rgb(233,226,245)",
			}
		},
	},
	plugins: [],
}
