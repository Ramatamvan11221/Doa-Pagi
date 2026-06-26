const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const scrollTopButton = document.getElementById("scrollTop");



/* ==========================
   DARK MODE
========================== */

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

}

themeToggle.onclick = () =>{

    body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        body.classList.contains("dark")
            ? "dark"
            : "light"
    );

};



/* ==========================
   FONT SIZE
========================== */

let fontSize = Number(localStorage.getItem("fontSize")) || 10;

document.documentElement.style
.setProperty("--font-size", fontSize + "px");


increaseFont.onclick = () =>{

    if(fontSize < 34){

        fontSize++;

        document.documentElement.style
        .setProperty("--font-size", fontSize+"px");

        localStorage.setItem("fontSize",fontSize);

    }

};



decreaseFont.onclick = () =>{

    if(fontSize >8){

        fontSize--;

        document.documentElement.style
        .setProperty("--font-size",fontSize+"px");

        localStorage.setItem("fontSize",fontSize);

    }

};



/* ==========================
   SCROLL TOP
========================== */

scrollTopButton.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};