(function () {
    function showCookieModal() {
        const overlay = document.getElementById("cookieOverlay");
        if (!overlay) {
            return;
        }

        overlay.classList.add("is-visible");
        document.body.classList.add("cookie-modal-open");
    }

    function hideCookieModal() {
        const overlay = document.getElementById("cookieOverlay");
        if (!overlay) {
            return;
        }

        overlay.classList.remove("is-visible");
        document.body.classList.remove("cookie-modal-open");
    }

    function setAllPreferences(accepted) {
        const analytics = document.getElementById("analyticsCookies");
        const marketing = document.getElementById("marketingCookies");

        if (analytics) {
            analytics.checked = accepted;
        }

        if (marketing) {
            marketing.checked = accepted;
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (!document.getElementById("cookieOverlay")) {
            return;
        }

        showCookieModal();

        document.getElementById("cookieAcceptAll")?.addEventListener("click", function () {
            setAllPreferences(true);
            hideCookieModal();
        });

        document.getElementById("cookieReject")?.addEventListener("click", function () {
            setAllPreferences(false);
            hideCookieModal();
        });

        document.getElementById("cookieSave")?.addEventListener("click", function () {
            hideCookieModal();
        });
    });
})();
