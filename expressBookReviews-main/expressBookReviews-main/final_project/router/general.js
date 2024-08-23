const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');

public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;
  if(username && password)
  {
    if(!isValid(username))
    {
        users.push({"username":username, "password":password});
        return res.status(200).json({message: "User successfully registred."});
        }
        else {
            return res.status(404).json({message: "User already exists!"}); 
        }
  }
  return res.status(404).json({message: "username &/ password are not provided."});
});

// // Get the book list available in the shop
// public_users.get('/',function (req, res) {
//   //Write your code here
//   res.send(JSON.stringify(books));
//   //return res.status(300).json({message: "Yet to be implemented"});
// });

// // Get book details based on ISBN
// public_users.get('/isbn/:isbn',function (req, res) {
//   //Write your code here
//   const isbn = req.params.isbn;
//   const book = books[isbn];
//     res.send(book);
//   return res.status(300).json({message: "Yet to be implemented"});
//  });
  
// // Get book details based on author
// public_users.get('/author/:author',function (req, res) {
//   //Write your code here
//   const author = req.params.author;
//   const booksmatch = Object.values(books).filter(book=> book.author === author);
//   res.send(booksmatch);
//   return res.status(300).json({message: "Yet to be implemented"});
// });

// // Get all books based on title
// public_users.get('/title/:title',function (req, res) {
//   //Write your code here
//   const title = req.params.title;
//   const titlematch = Object.values(books).filter(book => book.title === title);
//   res.send(titlematch);
//   return res.status(300).json({message: "Yet to be implemented"});
// });

// //  Get book review
// public_users.get('/review/:isbn', function (req, res) {
//     //Write your code here
//     const isbn = req.params.isbn;
//     const book = books[isbn];
//     if (book) {
//         res.status(200).send(book.reviews);
//     } else {
//         res.status(404).send({ message: "Book not found" });
//     }
// });

// Task 10

public_users.get('/', async(req, res)=>{
    //Write your code here
    try{
        res.send(books);
    }
    catch(error){
        res.status(500).json({message: "Error fetching book list"});
    }
  });

  // Task 11
public_users.get('/isbn/:isbn',function (req, res) {
   //Write your code here
   const isbn = req.params.isbn;
  try{
    res.send(books[isbn].title);
  }
  catch(error)
  {
    res.status(404).send("No book found for this isbn");
  }
 });

 //Task 12
 public_users.get('/author/:author', async(req,res)=>{
    const authorname = req.params.author;
    try{
        const matchbooks = Object.values(books).filter(books=> books.author === authorname);
        if(matchbooks.length === 0)
        {
            res.status(404).send("No books found for this author");
        }
        else{
            res.send(matchbooks);
        }
    }
    catch(error)
    {
        res.status(500).json({message:"Error fetching books by author"});
    }
 });

 //Task 13
 public_users.get('/title/:title',async(req,res)=>{
    const title = req.params.title;
    try{
        const matchbooks= Object.values(books).filter(book=>book.title === titleName);
        if(matchbooks.length === 0)
        {
            res.status(404).send("No books found for this title");
        }
        else{
            res.send(matchbooks);
        }
    }
    catch(error){
        res.status(500).json({message:"Error fetching books by title"});
    }
 });

 public_users.get('/review/:isbn',async(req,res)=>{
    const isbnBook=req.params.isbn;
    try{
        const matchbook=Object.keys(books).filter(book => book === isbnBook);
        if(matchbook.length===0)
        {
            res.status(404).send("No books found for this ISBN");
        }
        else{
            res.send(books[matchbook].reviews);
        }
    }
    catch(error)
    {
        res.status(500).json({message:'Error fetching books by ISBN'});
    }
 });
module.exports.general = public_users;
