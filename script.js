
document.addEventListener("DOMContentLoaded", function() {
    fetch("/api/stats")
        .then(response => response.json())
        .then(data => {
            document.getElementById("playerCount").textContent = data.players;
        });
});
