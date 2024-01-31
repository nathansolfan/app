const express = require("express");
// C O R S
const cors = require("cors");
// U S E R S
const { registerUser, loginUser } = require("../src/users/users");

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

// R E G I S T E R
app.post("/register", (req, res) => {
  const { name, password } = req.body;

  // L O G the D A T A
  console.log(req.body);
  const result = registerUser(name, password);

  if (result.success) {
    res.send(result.message);
  } else {
    res.status(400).send(result.message);
  }
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const result = loginUser(name, password);

  if (result.success) {
    res.json({ user: { name: name } });
  } else {
    res.status(401).send(result.message);
  }
});
// BOOKING backend
let bookings = [];
app.post("/book", (req, res) => {
  const booking = req.body;
  // stored in an array - booking
  bookings.push(booking);
  console.log("new Booking received", booking);
  res.json({ status: "success", message: "Booking confirmed", booking });
});

// SERVER LISTENING
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
