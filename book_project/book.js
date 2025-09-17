
const myLibrary = [
  {
    id: "acbb7dbd-51f2-4581-b4a2-8eb99a5be8ab",
    title: "Bob le bricoleur",
    author: "Chapline",
    page_nb: "69",
    read_status: false
  }
];

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
  console.log(myLibrary)
  bookCard(myLibrary);
}

const in_form = document.querySelector(".form_add_book");
const add_btn = document.querySelector("#add_btn");
const library = document.querySelector(".library");

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
      
      addBookToLibrary( data.get("title"),
                        data.get("author"),
                        data.get("page_nb"),
                        data.get("read_status") === "on");
       
    });

});

bookCard(myLibrary);
function bookCard(myLibrary){
  library.innerHTML = "";
  myLibrary.forEach(element => {
    const card_div = document.createElement("div");
    const btn_delete = document.createElement("button");
    const btn_read = document.createElement("button");
    const text = document.createElement("span");

    card_div.id = "card_" + element.id;

    btn_delete.classList.add("btn_delete");
    btn_delete.innerHTML= "Delete";

    btn_read.id = "btn_read";
    btn_read.innerHTML = "Read";

    text.id = "book_text";
    text.textContent = renderBookText(element);


    card_div.append(text, btn_delete, btn_read);
    library.append(card_div); 

    btn_delete.addEventListener("click", function(e){
      e.target.parentNode.remove(); 
    });

    btn_read.addEventListener("click", function(e){
      element.read_status = !element.read_status;
      text.textContent = renderBookText(element);
    });
  });

function renderBookText(element) {
  return  "Title : " + element.title + "\n" +
          "Author : " + element.author + "\n" +
          "Number of pages : " + element.page_nb + "\n" +
          "Read Status : " + element.read_status + "\n";
  }

};


