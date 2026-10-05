const projecten = [
    {
        titel: "Re-Green-Cycle",
        beschrijving: "Een project over recycling en duurzaamheid.",
        nummer: 1,
        afbeelding: "images/re-green-cycle.png",
        alt: "Re-Green-Cycle logo",
        link: "projecten/project1.html"
    },
    {
        titel: "Hotelator",
        beschrijving: "Een project waarbij ik een hotelsimulator heb ontwikkeld.",
        nummer: 2,
        afbeelding: "images/Hotelator.png",
        alt: "UI van Hotelator",
        link: "projecten/project2.html"
    },
    {
        titel: "Portfolio Website",
        beschrijving: "Een project waarbij ik mijn eigen portfolio website heb gemaakt.",
        nummer: 3,
        afbeelding: "images/portofoliosite.png",
        alt: "Screenshot van mijn portfolio website",
        link: "projecten/project3.html"
    }
];

const projectenLijst = document.querySelector("#projecten-lijst");
const sorteerFilter = document.querySelector("#sorteer-filter");

function sorteerProjecten(geselecteerdeOptie = "recent") {
    projectenLijst.replaceChildren();

    const gesorteerdeProjecten = [...projecten];

    if (geselecteerdeOptie === "recent") {
        gesorteerdeProjecten.sort((a, b) => b.nummer - a.nummer);
    }

    if (geselecteerdeOptie === "titel") {
        gesorteerdeProjecten.sort((a, b) =>
            a.titel.localeCompare(b.titel)
        );
    }

    gesorteerdeProjecten.forEach(project => {
        const kaart = document.createElement("article");
        kaart.classList.add("project-kaart");

        const afbeelding = document.createElement("img");
        afbeelding.src = project.afbeelding;
        afbeelding.alt = project.alt;

        const titel = document.createElement("h3");
        titel.textContent = project.titel;

        const beschrijving = document.createElement("p");
        beschrijving.textContent = project.beschrijving;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "Bekijk project";

        kaart.append(afbeelding, titel, beschrijving, link);
        projectenLijst.appendChild(kaart);
    });
}

sorteerProjecten();

sorteerFilter.addEventListener("change", (event) => {
    const geselecteerdeOptie = event.target.value;
    sorteerProjecten(geselecteerdeOptie);
});