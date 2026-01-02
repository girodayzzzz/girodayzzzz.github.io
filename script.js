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

    // ---- Skip intro for returning visitors ----
    if (hasSeenIntro) {
        intro.style.display = "none";
        intro.setAttribute("aria-hidden", "true");
        main.style.display = "block";
        return;
    }

    // ---- First visit flow ----
    // Ensure correct initial states
    intro.style.display = "flex";
    intro.style.opacity = "1";
    intro.removeAttribute("aria-hidden");

    main.style.display = "block"; // keep visible for no-JS / slow devices
    main.
