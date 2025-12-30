function filterListings() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const list = document.getElementById("businessList");
    const items = list.getElementsByClassName("value-box");

    for (let i = 0; i < items.length; i++) {
        const text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(filter) ? "" : "none";
    }
}
