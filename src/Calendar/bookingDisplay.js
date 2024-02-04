import React, { useEffect, useState } from "react";

export default function BookingDisplay() {
  const [bookings, setBookings] = useState([]);
  const handleDelete = () => {};

  useEffect(() => {
    fetch("http://localhost:3001/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Failed to fetch em bookings:", error));
  }, []);

  return (
    <div>
      <h3>All Bookings:</h3>
      <ul>
        {bookings.map((booking, index) => {
          return (
            <li key={index}>
              Date: {booking.date}, Time: {booking.time}
              <button
                onClick={() => {
                  handleDelete(booking.id);
                }}
              >
                Delete me
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
