const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

const jwtSecret='secret';
let users = [
    {
        "username": "new",
        "password": "123"
    }
];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
let userswithsamename = users.filter((user)=>{
    return user.username === username
});
if(userswithsamename.length > 0 )
{
    return true;
}
else
{
    return false;
}
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
let validuser = users.filter((user)=>
{
    return (user.username === username && user.password === password)
});
if(validuser.length > 0)
{
    return true;
}
else
{
    return false;
}
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password)
  {
    return res.status(404).json({message:"Error logging in"});
  }
  if(authenticatedUser(username,password))
  {
    let accessToken = jwt.sign({
        data: password,username
    }, 'access',{expiresIn: 60*60});
    req.session.authorization = {
        accessToken, username
    }
    return res.status(200).send("User successfully logged in");
    }
    else
    {
        return res.status(200).json({message: "Invalid login. Check username and password"}); 
    }
  });


// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
    //Write your code here
    const isbn = req.params.isbn;
    const username = req.session.username;
    const {content} = req.query;

      if (books[isbn]) {
            const idReview = '${username}';
            books[isbn].reviews[idReview]= content;
            res.status(200).json({message:"The Review for the book with ISBN "+isbn+ " has been added successfully."});
        }
      else {
        res.status(400).json({error:'Book not found'})
    }
  });

  regd_users.get("/auth/review/:isbn", (req,res) =>{
    const isbn = req.params.isbn;
    const username = req.params.username;
    if (books[isbn]) {
        const idReview = '${username}';
        let reviewers = Object.keys(books[isbn].reviews);
        res.status(200).json(reviewers);
    }
  else {
    res.status(400).json({error:'Book not found'})
}
  });

  regd_users.get("/auth",(req,res)=>{
    const CurrUser = req.user.username;
    res.send(CurrUser);
  });

regd_users.delete("/auth/review/:isbn", (req,res) => {
const isbn = req.params.isbn;
const username = req.session.authorization.username;

if(books[isbn].reviews[username])
{
    if(books[isbn].reviews[username]){
        delete books[isbn].reviews[username];
        return res.status(200).send(`The review of the user ${username} is deleted. After deletion the ISBN ${isbn} book is : `+ JSON.stringify(books[isbn], null, 4));    
    }
    }
    else {
        return res.status(404).json({message: `ISBN ${isbn} book is not found in the list`});
    }
});

regd_users.get("/auth/review", (req,res) => {
    res.send(books);
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
