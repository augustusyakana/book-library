const cardContainer = document.querySelector('.card-container');
const addBtn = document.querySelector('.add-btn');
const bookForm = document.getElementById('modal');
const form = document.querySelector('form');
const span = document.getElementsByClassName('close')[0];
const modalAddBtn = document.querySelector('.modal-add-btn');

modalAddBtn.addEventListener('click', function (event) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('#status');
    let read;
    if (status.value == 'on') {
        read = true;
    } else {
        read = false;
    }

    const book = new Book(title, author, pages, read);
    booksLibrary.push(book);

    event.preventDefault;
    bookForm.style.display = 'none';
    cardContainer.innerHTML = '';
    form.reset();
    displayBooks();

})

addBtn.onclick = function () {
    bookForm.style.display = 'block';
}

span.onclick = function () {
    bookForm.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == bookForm) {
        modal.style.display = 'none';
    }
}

const booksLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

const book1 = new Book("A Song of Ice & Fire - A Game of Thrones", "George R.R. Marting", 694, false);
const book2 = new Book("It Works! The Little Red Book", "RHJ", 28, true);

booksLibrary.push(book1);
booksLibrary.push(book2);

function displayBooks() {
    for (let i = 0; i < booksLibrary.length; i++) {
        let book = booksLibrary[i];

        const card = document.createElement('div');
        card.classList.add('book-card');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = book.title;

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('card-author');
        cardAuthor.textContent = `Author: ${book.author}`;

        const pageCount = document.createElement('p');
        pageCount.classList.add('page-count');
        pageCount.textContent = `${book.pages} pages`;

        const status = document.createElement('p');
        status.classList.add('read-status');

        const read = document.createElement('input');
        read.setAttribute('type', 'checkbox');
        read.classList.add('read-checkbox')

        if (book.read === true) {
            read.checked = true;
            status.textContent = "Completed";

        } else {
            read.checked == false;
            status.textContent = "Not Completed"

        }

        read.addEventListener('change', function () {
            if (read.checked) {
                status.textContent = "Completed";
            } else {
                status.textContent = "Not Completed";
                book.read = false;
            }
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = "REMOVE BOOK";

        deleteBtn.addEventListener('click', function () {
            cardContainer.innerHTML = '';
            booksLibrary.splice(i, 1);
            displayBooks();
        })

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(pageCount);
        card.appendChild(status);
        card.appendChild(read);
        card.appendChild(deleteBtn);


        cardContainer.appendChild(card);

    }
}


displayBooks();

