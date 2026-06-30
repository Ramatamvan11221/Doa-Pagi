const content = document.getElementById("content");
const backButton = document.getElementById("backButton");

function showHome() {

    backButton.hidden = true;

    content.innerHTML = `
        <section class="home">

            <div class="home-card" onclick="showPrayers('morning')">

                <div class="home-icon">
                    <i data-lucide="sun"></i>
                </div>

                <h2>Doa Pagi</h2>

                <div class="divider"></div>

                <span class="open">
                    Tap untuk membuka
                </span>

            </div>

            <div class="home-card" onclick="showPrayers('night')">

                <div class="home-icon">
                    <i data-lucide="moon-star"></i>
                </div>

                <h2>Doa Malam</h2>

                <div class="divider"></div>

                <span class="open">
                    Tap untuk membuka
                </span>

            </div>

        </section>
    `;

    lucide.createIcons();
}

function showPrayers(group) {

    backButton.hidden = false;

    lucide.createIcons();

    content.innerHTML = "";

    prayerGroups[group].forEach(prayer => {

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

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

backButton.addEventListener("click", () => {

    showHome();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

showHome();

const menuToggle = document.getElementById("menuToggle");
const floatingActions = document.getElementById("floatingActions");

menuToggle.onclick = () => {

    floatingActions.classList.toggle("show");

    const open = floatingActions.classList.contains("show");

    menuToggle.innerHTML = open
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="settings-2"></i>';

    lucide.createIcons();

};

lucide.createIcons();