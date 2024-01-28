import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type","text/html;charset=utf-8");
    res.end("主頁");
});

app.get("/p/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);
    let contentText = "";
    if(id === "CvRz0e3Awmi"){
        contentText = "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》";
    }else if(id === "CvZP-PIguWG"){
        contentText = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》";
    }
    res.send(contentText)
});

// app.get('/users/:userId', function(req, res) {
//     let userId = req.params.userId;
//     res.send('User ID: ' + userId);
// });

app.get('/books/:categoryId/:bookId', function(req, res) { 
    let categoryId = req.params.categoryId;
    let bookId = req.params.bookId;
    res.send(`Category ID: ${categoryId}, Book ID: ${bookId}`);
});

// app.get('/users/:name?', function(req, res) {
//     if (req.params.name) {
//         res.send('Hello, ' + req.params.name);
//     } else {
//         res.send('Hello, Guest');
//     }
// });

app.get('/users/:id([0-9]+)', function(req, res) {
    res.send('User ID: ' + req.params.id);
});

app.get('/files/*', function(req, res) {
    var filePath = req.params[0];
    res.send('File Path: ' + filePath);
});

app.listen(3000, () => {
    console.log("服務已啟動於 http://localhost:3000");
});

