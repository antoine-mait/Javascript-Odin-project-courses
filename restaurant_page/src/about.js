export default function loadAbout(){
    const content = document.querySelector("#content");
    content.innerHTML="";

    const letter_box = document.createElement("div");
    letter_box.classList.add("letter-box");

    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.textContent= "La Lumière du Bistro";

    letter_box.append(letter);

    const lunch_box = document.createElement("div");
    lunch_box.classList.add("lunch_box");

    const dinner_box = document.createElement("div");
    dinner_box.classList.add("dinner_box");

    const lunch = document.createElement("div");
    lunch.classList.add("lunch");

    const dinner = document.createElement("div");
    dinner.classList.add("dinner");

    lunch.innerHTML = `

    `;
    lunch_box.append(lunch);
    dinner_box.append(dinner);
    content.append(letter_box , lunch_box , dinner_box);
}

export const menu_btn = document.querySelector("#menu");