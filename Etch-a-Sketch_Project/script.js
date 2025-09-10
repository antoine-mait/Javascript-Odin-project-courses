const container = document.querySelector("#container");
const btn = document.querySelector("#reset_btn");

let userInput ;

const containerSize = 400
container.style.width = containerSize + "px";
container.style.height = containerSize + "px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.backgroundColor = "black";

btn.addEventListener("click", () => {
    let userInput;
    do{
        userInput = prompt("How many squares per side ( 1 - 100 )? ")
        userInput = Number(userInput);
    }while(isNaN(userInput) || userInput < 1 || userInput > 100);

    buildGrid(userInput);
});

function buildGrid(size){
    container.innerHTML = "";

    let divSize = containerSize /size;
    for (let i = 0; i < size * size; i++) {
        let divCreate = document.createElement("div");

        divCreate.classList.add("square" + i);

        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        divCreate.style.boxSizing = "border-box";
        divCreate.style.width = divSize + "px";
        divCreate.style.height = divSize + "px";
        divCreate.style.border = "1px solid black";
        divCreate.style.backgroundColor = "#" + randomColor;
        divCreate.style.opacity = 1;


        divCreate.addEventListener('mouseover',function(){
            divCreate.style.backgroundColor="black";
        })
        divCreate.addEventListener('mouseleave',function(){
            const newRandomColor = Math.floor(Math.random()*16777215).toString(16);
            divCreate.style.backgroundColor= "#" + newRandomColor;
            divCreate.style.opacity -= 0.1;
            
        })

        container.append(divCreate);
    };
    
};