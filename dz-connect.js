function filterListings() {
    const input = document.getElementById("searchInput");
    const list = document.getElementById("businessList");
    const noResults = document.getElementById("noResults");

    if (!input || !list) return;

    const filter = input.value.toLowerCase();
    const items = list.getElementsByClassName("value-box");

    let visibleCount = 0;

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            items[i].style.display = "";
            visibleCount++;
        } else {
            items[i].style.display = "none";
        }
    }

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}
