const myLibrary = [];
let table = document.getElementById("myTable");
let tableBody = document.getElementById("tableBody");


class Book{
    constructor(title,author,pageNum,read){
        this.title = title;
        this.author = author;
        this.numOfPages = pageNum;
        this.read = read;
    }
    info(){
        let text = this.title +' by ' + this.author +", "+ this.numOfPages + 
        " pages, ";
        let hasRead = read ? "read" : "not read yet"
        text = text + hasRead;
        return text
    }
}

function addBookToLibrary(){
    let title = prompt("Please Enter Book Title");
    let author = prompt("Please Enter The Authors Name");
    let numOfPages = prompt("Please Enter The Number of Pages");
    myLibrary.push(new Book(title,author,numOfPages,false));
    updateLibrary()
}

function updateLibrary(){
    tableBody.innerHTML = '';
    myLibrary.forEach((book) => {
        let row = tableBody.insertRow(-1);

        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);
        let c4 = row.insertCell(3);

        c1.innerText = book.title;
        c2.innerText = book.author;
        c3.innerText = book.numOfPages;
        let btn = document.createElement("input");
        btn.type = "button";
        btn.setAttribute("id","switchRead")
        btn.setAttribute("class",book.read)
        btn.addEventListener("click", function(){
            changeRead(book);
        })
        c4.innerText = book.read;
        c4.appendChild(btn);

        let c5 = row.insertCell(4);
        let remove = document.createElement("input");
        remove.type = "button";
        remove.setAttribute("id","remove")
        remove.addEventListener("click", function(){
            removeBook(book)
        })
        remove.innerHTML = "X";
        c5.appendChild(remove);
    })
}

function changeRead(book){
    book.read = book.read? false : true
    updateLibrary();
}

function removeBook(book){
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index,1);
    updateLibrary();
}

myLibrary.push(new Book("The Hobbit","J.R.R Tolkien","295",false))
updateLibrary();