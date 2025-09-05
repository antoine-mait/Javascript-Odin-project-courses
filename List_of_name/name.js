const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// replace last "," by "."

  for (const name of people){
    if (name === "Lola" || name === "Phil"){
      refused.textContent += name + ", ";

    } else {
      admitted.textContent += name + ", ";
    }
  }
refused.textContent = refused.textContent.slice(0, -2) + ".";
admitted.textContent = admitted.textContent.slice(0, -2) + ".";
