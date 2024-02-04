import React, { useEffect, useState } from "react";

export default function bookingDisplay() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bookings");
  });

  return <div></div>;
}
