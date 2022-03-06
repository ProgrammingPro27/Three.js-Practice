//include http, fs and url module
const http = require('http');
const fs = require('fs');

//create http server listening on port 8080
http.createServer(function (req, res) {
    let path = "./images/";
    switch (req.url) {
        case "/":
            path = "./index.html";
            ; break;
        case "/cardBack":
            path += "cardBack.png";
            ; break;
        case "/cardFront":
            path += "dark.png";
            ; break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            res.end();
        } else {
            if (path.includes("html")) {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            } else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        }
    })
}).listen(8080);
console.log("Server running at http://localhost:8080/");