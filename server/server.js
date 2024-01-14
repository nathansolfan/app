const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("submit-form-jo", (req, res) => {
  console.log(req.body); // log the data
  res.send("Data Received jo");
});
