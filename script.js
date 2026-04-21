var map = L.map('map').setView([41.9028, 12.4964], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Chiamate alle funzioni
aggiungiMonumenti(map);
mostraStatisticheMonumenti();

document.getElementById("btnTabella").addEventListener("click", function() {
    const container = document.getElementById("tabellaContainer");
    container.innerHTML = "";

    const dati = ottieniListaMonumenti();

    const table = document.createElement("table");

    dati.forEach((m, i) => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.textContent = i + 1;

        const td2 = document.createElement("td");
        td2.textContent = m.lat;

        const td3 = document.createElement("td");
        td3.textContent = m.lng;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    });

    container.appendChild(table);
});