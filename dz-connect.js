function filterListings() {
    const input = document.getElementById("searchInput");
    const list = document.getElementById("businessList");
    const noResults = document.getElementById("noResults");

    if (!input || !list) return;

    const filter = input.value.toLowerCase().trim();
    const items = Array.from(list.getElementsByClassName("value-box"));

    let visibleCount = 0;

    items.forEach(item => {
        // Reset highlights
        item.innerHTML = item.innerHTML.replace(/<mark>|<\/mark>/g, "");

        const text = item.textContent.toLowerCase();

        if (filter === "" || text.includes(filter)) {
            item.style.display = "";
            visibleCount++;

            // Highlight matched text (UX boost)
            if (filter !== "") {
                highlightText(item, filter);
            }
        } else {
            item.style.display = "none";
        }
    });

    // Sort: premium first
    items.sort((a, b) => {
        const aPremium = a.classList.contains("premium") ? 1 : 0;
        const bPremium = b.classList.contains("premium") ? 1 : 0;
        return bPremium - aPremium;
    });

    // Re-append in correct order
    items.forEach(item => list.appendChild(item));

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

// Highlight helper
function highlightText(element, keyword) {
    const regex = new RegExp(`(${keyword})`, "gi");
    element.innerHTML = element.innerHTML.replace(regex, "<mark>$1</mark>");
}
