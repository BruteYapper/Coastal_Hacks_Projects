const express = require("express");
const path = require("path");



const app = express();

app.listen(3000);


app.use(express.static(path.__dirname + "../WebPage"));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../WebPage/index.html"))
})