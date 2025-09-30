export default function loadhome(){
    const content = document.querySelector("#content");
    content.innerHTML="";

    const letter_box = document.createElement("div");
    letter_box.classList.add("letter-box");

    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.textContent= "La Lumière du Bistro";

    letter_box.append(letter);

    const about_us_box = document.createElement("div");
    about_us_box.classList.add("about-us-box");

    const about_us = document.createElement("div");
    about_us.classList.add("about-us");

    about_us.innerHTML = `
    Nestled in the heart of the old town,<br>
    La Lumière Bistro combines rustic charm with modern elegance.<br>
    Our philosophy is simple: <br>
    fresh, seasonal ingredients prepared with care and creativity.<br>
    Whether you’re joining us for a quiet dinner, a family celebration,<br>
    or simply a glass of wine by candlelight,<br>
    We want every guest to feel at home.
    `;

    about_us_box.append(about_us);
    content.append(letter_box , about_us_box);
}

export const home_btn = document.querySelector("#home");