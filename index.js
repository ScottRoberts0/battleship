const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log("Server up");
});