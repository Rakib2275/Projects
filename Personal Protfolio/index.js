"use strict";

const $themeBtn = document.querySelector("[data-theme-btn]"); // Fixed missing closing bracket
const $HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Added ': dark' to the media query

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme)
}

const changeTheme = () =>{
     $HTML.dataset.theme = sessionStorage.getItem("theme") == "light"? "dark": "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
 }

$themeBtn.addEventListener("click",changeTheme);