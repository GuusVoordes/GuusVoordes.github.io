const formulier = document.getElementById("contactFormulier");
const melding = document.getElementById("melding");

formulier.addEventListener("submit", function(event) {
    event.preventDefault();

    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const bericht = document.getElementById("bericht").value;

    console.log("Naam:", naam);
    console.log("Email:", email);
    console.log("Bericht:", bericht);

    melding.textContent = "Bedankt voor je bericht, " + naam + "!";
    formulier.reset();
});