const map = L.map('map').setView([41.9028, 12.4964], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// AGGIUNTA
aggiungiMonumenti(map);

document.getElementById("formMonumento").addEventListener("submit", function(e) {
    e.preventDefault();

    const lat = parseFloat(document.getElementById("lat").value);
    const lng = parseFloat(document.getElementById("lng").value);

    const nuovo = { lat, lng };

    aggiungiMonumentoArray(nuovo);

    L.marker([lat, lng]).addTo(map);
});
