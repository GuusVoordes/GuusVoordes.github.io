const formulier = document.getElementById("contactFormulier");
const melding = document.getElementById("melding");

const velden = [
    { id: "naam", boodschap: "Vul een geldige naam in." },
    { id: "email", boodschap: "Vul een geldig e-mailadres in." },
    { id: "bericht", boodschap: "Vul een bericht in." }
];

function valideerVeld(veld) {
    const input = document.getElementById(veld.id);
    const foutmelding = document.querySelector(`#${veld.id}-error`);
    const geldig = input.checkValidity();

    input.setAttribute("aria-invalid", !geldig);
    foutmelding.textContent = geldig ? "" : veld.boodschap;

    return geldig;
}

formulier.addEventListener("submit", function(event) {
    event.preventDefault();

    const alleGeldig = velden.every(valideerVeld);

    if (!alleGeldig) {
        melding.textContent = "Er zijn fouten in het formulier. Controleer de velden.";
        return;
    }

    const naam = document.getElementById("naam").value;

    melding.textContent = "Bedankt voor je bericht, " + naam + "!";
    formulier.reset();
});
