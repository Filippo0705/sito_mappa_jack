// Array globale dei monumenti
const monumenti = [
    { nome: "Colosseo", lat: 41.8902, lng: 12.4922 },
    { nome: "Fontana di Trevi", lat: 41.9009, lng: 12.4833 },
    { nome: "Pantheon", lat: 41.8986, lng: 12.4768 },
    { nome: "Piazza Navona", lat: 41.8992, lng: 12.4731 },
    { nome: "Foro Romano", lat: 41.8925, lng: 12.4853 }
];

// Funzione per aggiungere i marker
function aggiungiMonumenti(mappa) {
    monumenti.forEach(monumento => {
        L.marker([monumento.lat, monumento.lng])
            .addTo(mappa)
            .bindPopup(monumento.nome);
    });
}

// Funzione per mostrare statistiche
function mostraStatisticheMonumenti() {
    alert("Numero di monumenti: " + monumenti.length);
}
function aggiungiMonumentoArray(monumento) {
    monumenti.push(monumento);
}