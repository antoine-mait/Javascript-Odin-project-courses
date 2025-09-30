export default function loadMenu(){
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
<p id="title"><span class="no-underline">🌿</span> Lunch Menu </p>
<span class="no-underline">(Formule Déjeuner)</span> 

<p class="subtitle">Entrées</p>

<ul class="menu">
    <li class="plate" > Velouté de Potiron with roasted chestnuts </li>
    <li class="plate" > Goat cheese & fig salad with honey vinaigrette </li>
    <li class="plate" > Smoked salmon tartine on sourdough </li>
</ul>

<p class="subtitle">Plats</p>

<ul class="menu">
    <li class="plate">Herb-crusted chicken with rosemary potatoes </li>
    <li class="plate"> Provençal ratatouille with fresh herbs (Vegan) </li>
    <li class="plate"> Pan-seared sea bass with fennel and citrus sauce </li>
</ul>

<p class="subtitle">Desserts</p>

<ul class="menu">
    <li class="plate"> Classic crème brûlée </li>  
    <li class="plate"> Seasonal fruit sorbet </li>  
    <li class="plate"> Chocolate mousse with candied orange </li>  

</ul>
    `;

        dinner.innerHTML = `
<p id="title"><span class="no-underline">🍷</span> Dinner Menu </p>
<span class="no-underline">(Menu du Soir)</span> 

<p class="subtitle">Entrées</p>

<ul class="menu">
    <li class="plate" > Foie gras with brioche and fig compote </li>
    <li class="plate" > Warm camembert baked with garlic and thyme </li>
    <li class="plate" > Beef carpaccio with arugula and parmesan </li>
</ul>

<p class="subtitle">Plats</p>

<ul class="menu">
    <li class="plate"> Duck confit with truffle mashed potatoes </li>
    <li class="plate"> Rack of lamb with red wine reduction </li>
    <li class="plate"> Grilled aubergine towers with tomato confit </li>
    <li class="plate"> Filet de boeuf with peppercorn sauce </li>
</ul>

<p class="subtitle">Desserts</p>

<ul class="menu">
    <li class="plate"> Lemon tart with lavender cream </li>  
    <li class="plate"> Pears poached in red wine </li>  
    <li class="plate"> Profiteroles with vanilla ice cream and warm <br>
    chocolate sauce </li>  

</ul>
    `;
    lunch_box.append(lunch);
    dinner_box.append(dinner);
    content.append(letter_box , lunch_box , dinner_box);
}

export const menu_btn = document.querySelector("#menu");