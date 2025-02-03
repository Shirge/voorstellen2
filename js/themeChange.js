themeButton.onclick = function themeChange() {
    if (lightTheme) {
        lightTheme = false;
        document.body.removeAttribute("theme");
        themeButton.src = "img/moon.svg";
        document.body.classList.toggle("shadow");
    } else {
        lightTheme = true;
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
        themeButton.src = "img/sun.svg";
    }
};