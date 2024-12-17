themeButton.onclick = function themeChange() {
    if (darkTheme) {
        darkTheme = false;
        document.body.removeAttribute("theme");
        themeButton.src = "img/light.svg";
        document.body.classList.toggle("shadow");
    } else {
        darkTheme = true;
        document.body.setAttribute("theme", "dark");
        document.body.classList.toggle("shadow");
        themeButton.src = "img/dark.svg";
    }
};