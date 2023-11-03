import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    darkMode: "media",
    darkMode: "class",

    daisyui: {
        themes: ["light"],
    },

    theme: {
        extend: {
            colors: {
                primary: "#F81539",
                secondary: "#FC4308",
                black: "#3E3232",
                dark: "#000000",
                white: "#ffffff",
                transparent: "transparent",
                current: "currentColor",
                purple: "#3f3cbb",
                midnight: "#121063",
                metal: "#565584",
                tahiti: "#3ab7bf",
                silver: "#ecebff",
                "bubble-gum": "#ff77e9",
                bermuda: "#78dcca",
            },

            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
