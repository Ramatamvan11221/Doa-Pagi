const content = document.getElementById("content");

function renderPrayers() {

    content.innerHTML = "";

    prayers.forEach((prayer) => {

        const section = document.createElement("section");

        section.className = "prayer";

        section.innerHTML = `
            <h2>${prayer.title}</h2>

            ${prayer.paragraphs
                .map(paragraph => `<p>${paragraph}</p>`)
                .join("")}
        `;

        content.appendChild(section);

    });

}

renderPrayers();