document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    // Fail safely if required elements are missing
    if (!intro || !main) return;

    // ---- Safe sessionStorage access ----
    const storageAvailable = (() => {
        try {
            const testKey = "__dz_test__";
            sessionStorage.setItem(testKey, testKey);
            sessionStorage.removeItem(testKey);
            return true;
        } catch {
            return false;
        }
    })();

    const hasSeenIntro =
        storageAvailable && sessionStorage.getItem("introSeen") === "true";

    // ---- Always ensure main content is visible ----
    main.style.display = "block";
    main.style.opacity = "1";

    // ---- Skip intro for returning visitors ----
    if (hasSeenIntro) {
        intro.style.display = "none";
        intro.setAttribute("aria-hidden", "true");
        return;
    }

    // ---- First visit flow ----
    intro.style.display = "flex";
    intro.style.opacity = "1";
    intro.removeAttribute("aria-hidden");

    // Fade out intro after short delay
    setTimeout(() => {
        intro.style.transition = "opacity 0.5s ease";
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
            intro.setAttribute("aria-hidden", "true");

            if (storageAvailable) {
                sessionStorage.setItem("introSeen", "true");
            }
        }, 500);
    }, 1200);
});
