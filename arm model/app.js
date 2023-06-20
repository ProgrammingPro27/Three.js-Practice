const express = require("express");
const app = express();

app.use("/arms", express.static(__dirname + "/arm"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
})
app.listen(3000, function () {
    console.log("server listening on port 3000")
})