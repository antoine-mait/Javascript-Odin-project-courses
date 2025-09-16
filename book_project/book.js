/*
all book are {} and store in array [];


function loop through the array , display each book on the page , in a card for each

in a each book card , add a remove book button and a read button 

connect the read button with a prototype function that toggle a book instance read status
*/

const myLibrary = [];

function Book(title , author , page_nb , read_status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author; 
  this.page_nb = page_nb;
  this.read_status = read_status;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function addBookToLibrary(title, author, page_nb, read_status) {
  myLibrary.push(new Book(title, author, page_nb, read_status));
  alert(JSON.stringify(myLibrary));
}

const in_form = document.querySelector(".form_add_book");
const add_btn = document.querySelector("#add_btn");

add_btn.addEventListener("click", function(){

  const form_add = document.createElement("form");
  const book_info = ["title" ,"author", "page_nb", "read_status"];

  in_form.append(form_add);

  for (const info of book_info){
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.innerHTML = capitalizeFirstLetter(info) + ":";

    label.setAttribute("for", info);
    input.name = info;
    input.id =  info;
    input.required = true;

    if (info === "read_status"){
      input.type = "checkbox";
      input.required = false;
    }

    if(info === "page_nb"){
      input.type = "number";
    }
    form_add.append(div);
    div.append(label,input);
    }
  
    const add_book_btn = document.createElement("button");
    add_book_btn.id = "add_book_btn";
    add_book_btn.type = "submit";
    add_book_btn.innerHTML = "add" ;
    form_add.append(add_book_btn);

    form_add.addEventListener("submit", function(event) {
      event.preventDefault();
      const data = new FormData(form_add);
      const title = data.get("title");
      const author = data.get("author");
      const page_nb = data.get("page_nb");
      const read_status = data.get("read_status") === "on" ? true : false;
      addBookToLibrary(title, author, page_nb, read_status);
      
    });

});




