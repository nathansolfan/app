const express = require("express");
// C O R S
const cors = require("cors");
// U S E R S
const { registerUser, loginUser } = require("../src/users/users");

// FS and Path
const fs = require("fs");
const path = require("path");
const { default: axios } = require("axios");
const { error } = require("console");

// E X P R E S S
const app = express();
const port = 3001;
// C O R S
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// feedback.json path
const FEEDBACK_FILE = path.join(__dirname, "feedback.json");

const readFeedbackFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(FEEDBACK_FILE, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(JSON.parse(data.toString() || "[]"));
    });
  });
};

const saveFeedbackToFile = (feedback) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(feedback, null, 2);
    fs.writeFile(FEEDBACK_FILE, data, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};

app.post("/api/feedback", async (req, res) => {
  const { rating, comment } = req.body;
  if (rating == null || comment == null) {
    return res.status(400).json({ error: "Rating and Comment are mssing" });
  }

  try {
    const feedbackList = await readFeedbackFromFile();
    const newFeedback = {
      id: feedbackList.length + 1,
      rating,
      comment,
      timestamp: new Date(),
    };

    feedbackList.push(newFeedback); //Add the new feedback
    await saveFeedbackToFile(feedbackList);

    res.status(201).json(newFeedback);
  } catch (error) {
    console.error("Failed to store feedback", error);
    res.status(500).json({ error: "Failed to store feedback" });
  }
});

app.get("/api/feedback", async (req, res) => {
  try {
    const feedbackList = await readFeedbackFromFile();
    res.json(feedbackList);
  } catch (error) {
    console.error("Failed to read fileee", error);
    res.status(500).json({ error: "Failed to retrieveee" });
  }
});

// bookings.json path
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
// L O G I N
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const result = loginUser(name, password);

  if (result.success) {
    res.json({ user: { name: name } });
  } else {
    res.status(401).send(result.message);
  }
});

// GET MATCHS END POINT
app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.sportmonks.com/v3/football?api_token=KOGExVafhqzu5iyQvhWVQqUtXHagKdgTJBJcrora3iy4ilkuWaatCVwfatW6`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error);
  }
});

// GET ENDPOINT
app.get("/bookings", async (req, res) => {
  try {
    const bookings = await readBookingsFromFile();
    res.json(bookings);
  } catch (error) {}
});

// DELETE ENDPOINT - with function generateId()
const generateId = () => {
  return Date.now().toString();
};
app.delete("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const bookings = await readBookingsFromFile();
  const updatedBookings = bookings.filter((booking) => booking.id !== id);
  await saveBookingsToFile(updatedBookings);
  res.send({ message: "Booking deleted" });
});

app.post("/book", async (req, res) => {
  try {
    const bookingDetails = req.body;
    const id = generateId();
    const newBooking = { id, ...bookingDetails };
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
    console.error("Failed to proceed", error);
    res.status(500).json({ error: "Failed to process" });
  }
});

// STORE FEEDBACK
let feedbackStore = [];
app.post("/api/feedback", (req, res) => {
  const { rating, comment } = req.body;
  if (rating == null || comment == null) {
    return res.status(400).send("Rating and comment are required");
  }

  const newFeedback = {
    // simple way to generate ID
    id: feedbackStore.length + 1,
    rating,
    comment,
    timestamp: new Date(),
  };

  feedbackStore.push(newFeedback);
  res.status(201).json(newFeedback);
});

// SERVER LISTENING
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
