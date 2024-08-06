const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = require("./routes/userRoutes");
const menuroute = require("./routes/menuRoutes");

app.get("/", function (req, res) {
  res.send("Hello World kya haal hao");
});

app.use('/user',router)
app.use('/menu',menuroute)
  
app.listen(3000, () => {
  console.log("server chal gya url hit kro hurrrrrrrr");
});
