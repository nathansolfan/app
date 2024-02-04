const express = require("express");
// C O R S
const cors = require("cors");
// U S E R S
const { registerUser, loginUser } = require("../src/users/users");

// FS and Path
const fs = require("fs");
const path = require("path");

// E X P R E S S
const app = express();
const port = 3001;
// C O R S
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const BOOKINGS_FILE = path.join(__dirname, "bookings.json");

console.log("Bookings file path:", BOOKINGS_FILE);

const readBookingsFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(BOOKINGS_FILE, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(JSON.parse(data.toString() || "[]"));
    });
  });
};
// Promise( () => {} )
const saveBookingsToFile = (bookings) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(bookings, null, 2);
    console.log("Saving bookings to file:", data);
    fs.writeFile(BOOKINGS_FILE, data, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};

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

// GET ENDPOINT

app.get("", () => {});

app.post("/book", async (req, res) => {
  try {
    const newBooking = req.body;
    console.log("Received booking dataaa:", newBooking);
    const bookings = await readBookingsFromFile();
    bookings.push(newBooking);
    await saveBookingsToFile(bookings);
    console.log("New booking received", newBooking);
    res.json({
      status: "success",
      message: "Booking confirmedd",
      booking: newBooking,
    });
  } catch (error) {
    console.log("Failed to proceed", error);
    res.status(500).send("Failed to process booking");
  }
});

// SERVER LISTENING
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
