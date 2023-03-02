/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
