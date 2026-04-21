// Inizializzazione mappa centrata su Roma
var map = L.map('map').setView([41.9028, 12.4964], 13);

// Tile layer OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);