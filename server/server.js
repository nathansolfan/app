const express = require("express");
// C O R S
const cors = require("cors");
// U S E R S
const { registerUser } = require("../src/users/users");

// E X P R E S S
const app = express();
const port = 3001;

// C O R S
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit-form-nat", (req, res) => {
  console.log(req.body); // log the data
  res.send("Data Received jo");
});

app.post("/register", (req, res) => {
  const { name, password } = req.body;
  const result = registerUser(name, password);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
