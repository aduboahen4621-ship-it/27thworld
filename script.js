function searchContent() {
    const input = document.getElementById("searchInput");
    const searchTerm = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".searchable");
    if (!searchTerm) {
        alert("Please enter what you want to search.");
        return;
    }
    let found = false;
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });
    if (!found) {
        alert("No matching opportunities found.");
    }
    document.querySelectorAll(".section").forEach(section => {
        if (section.querySelector(".searchable")) {
            section.style.display = "block";
        }
    });
}
function applyJob(jobName) {
    alert(
        "You selected " + jobName +
        ". Job application system will be connected soon."
    );
}
