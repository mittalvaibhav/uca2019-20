const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var id = 1;
var books = [
    {
        "id": id,
        "name": "N2UP",
        "author": "A2UP",
        "version": "1.4"
    }
]

app.use(bodyParser.json());

// Sample middleware
app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.get("/", function (req, res) {
    res.send("Library portal");
})

app.get("/bookList", (req, res) => {
    res.send(books)
})

app.post("/addBook", (req, res) => {
    id = id + 1;
    let book = req.body;
    book.id = id;
    books.push(req.body);
    res.status(200);
    res.send(book);
})

app.delete('/deleteBook/:id', (req, res) => {
    let bookId = req.params.id;
    let newBookList = [];
    books.forEach(book => {
        if (bookId != book.id) {
            newBookList.push(book);
        }
    })
    books = newBookList;
    res.send(`Id ${bookId} deleted successfully`);
})

app.listen(8080, () => {
    console.log("Server is listening at port 8080")
})