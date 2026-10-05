const temperatuur = document.getElementById("temperatuur");

const latitude = 52.0705;
const longitude = 4.3007;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=Europe%2FAmsterdam`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const temp = data.current.temperature_2m;

        temperatuur.textContent = `${temp} °C`;
    })
    .catch(error => {
        console.error("Er ging iets mis:", error);
        temperatuur.textContent = "Temperatuur niet beschikbaar";
    });