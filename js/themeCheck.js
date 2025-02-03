const systemlightTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
const themeButton = document.getElementById("theme");
var lightTheme;
var imageSrc;

function themeCheck() {
    if (systemlightTheme) {
        lightTheme = true;
    } else {
        lightTheme = false
    }

    if (lightTheme) {
        themeButton.src = "img/sun.svg";
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
    } else {
        themeButton.src = "img/moon.svg";
    }
};