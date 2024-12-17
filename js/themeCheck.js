const systemDarkTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
const themeButton = document.getElementById("theme");
var darkTheme;
var imageSrc;

function themeCheck() {
    if (systemDarkTheme) {
        darkTheme = false;
    } else {
        darkTheme = true
    }
    if (darkTheme) {
        themeButton.src = "img/light.svg";
    } else {
        darkTheme = true;
        document.body.setAttribute("theme", "dark");
        document.body.classList.toggle("shadow");
        themeButton.src = "img/dark.svg";
    }
};