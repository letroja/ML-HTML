const express = require('express');
const app = express();
const port = 3030;
const path = require("path");

const publicPath = path.resolve(__dirname,'./public')
app.use(express.static('publicPath'));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname,'./views/home.html'))
);



  app.listen(port, () =>
  console.log("Server runing in http://localhost:" + port)
);
