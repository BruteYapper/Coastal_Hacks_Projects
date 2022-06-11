const express = require("express");
const path = require("path");



const app = express();

app.listen(3000);


app.use(express.static(path.join(__dirname, "../public")));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../WebPage/index.html"));
})