const express = require("express");
// C O R S
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("submit-form-nat", (req, res) => {
  console.log(req.body); // log the data
  res.send("Data Received jo");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
