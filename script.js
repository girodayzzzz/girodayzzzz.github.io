window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("intro");
        const main = document.getElementById("main");

        if (intro) intro.style.display = "none";
        if (main) main.style.display = "block";
    }, 3000);
});
