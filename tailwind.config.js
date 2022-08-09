const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: [
				"Noto Sans CJK JP",
				"Noto Sans CJK",
				"Yu Gothic",
				"YuGothic",
				"sans-serif",
			],
			serif: [
				"Noto Serif CJK JP",
				"Noto Serif CJK",
				"Yu Mincho",
				"YuMincho",
				"serif",
			],
		},
		extend: {
			animation: {
				"pulse-fast": "pulse 1.6s cubic-bezier(0.8, 0, 0.2, 1) infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
