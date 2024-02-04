import React, { useEffect, useState } from "react";

export default function bookingDisplay() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Failed to fetch em bookings:", error));
  }, []);

  return <div></div>;
}
