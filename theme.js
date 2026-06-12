(function () {
    const storageKey = "theme";
    const defaultTheme = "light";
    const validThemes = ["light", "dark", "matrix", "spring", "lava"];
    const root = document.documentElement;

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);

        const select = document.getElementById("themeSelect");
        if (select && select.value !== theme) {
            select.value = theme;
        }
    }

    function getPreferredTheme() {
        const saved = localStorage.getItem(storageKey);
        return validThemes.includes(saved) ? saved : defaultTheme;
    }

    function setTheme(theme) {
        if (!validThemes.includes(theme)) {
            return;
        }

        localStorage.setItem(storageKey, theme);
        applyTheme(theme);
    }

    applyTheme(getPreferredTheme());

    document.addEventListener("DOMContentLoaded", function () {
        const select = document.getElementById("themeSelect");
        if (!select) {
            return;
        }

        select.value = getPreferredTheme();
        applyTheme(select.value);

        select.addEventListener("change", function () {
            setTheme(select.value);
        });
    });
})();
