window.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    // If elements are missing, fail safely
    if (!intro || !main) return;

    // Check if intro was already shown
    const introSeen = sessionStorage.getItem("introSeen");

    if (introSeen) {
        // Skip intro for returning visitors
        intro.style.display = "none";
        main.style.display = "block";
        return;
    }

    // First visit: show intro briefly
    main.style.display = "none";
    intro.style.display = "flex";
    intro.style.opacity = "1";

    setTimeout(() => {
        intro.style.transition = "opacity 0.5s ease";
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
            main.style.display = "block";
            sessionStorage.setItem("introSeen", "true");
        }, 500);
    }, 1500); // shorter, cleaner
});
