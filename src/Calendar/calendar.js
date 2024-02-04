import React, { useState } from "react";
import Calendar from "react-calendar";
import Confirmation from "./confirmation";
import BookingDisplay from "./bookingDisplay";

const generateTime = (date) => {
  const formattedDate = date.toISOString().split("T")[0];
  const morningSlots = ["Morning: 6AM - 6PM"];
  const eveningSlots = ["Evening: 6PM - 6AM"];

  // combine morning and evening
  const slots = morningSlots.concat(eveningSlots);
  return { [formattedDate]: slots };
};

export default function MyCalendar() {
  // create state for Date - which is the  value of Calendar
  const [selectDate, setSelectDate] = useState(new Date());
  // keep track of time slot
  const [selectedTime, setSelectedTime] = useState(null);
  // state for confirmation - starts false
  const [showConfirmation, setShowConfirmation] = useState(false);

  // BOOK TIME
  const bookTimeSlot = (time) => {
    setSelectedTime(time);
    setShowConfirmation(true);
  };

  const onChange = (date) => {
    setSelectDate(date);
    console.log(date);
  };

  const formattedDate = selectDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const chosenTime = generateTime(selectDate);

  // TO CANCEL
  const onCancel = () => {
    setShowConfirmation(false);
  };

  // TO CONFIRM
  const confirmBooking = () => {
    const bookingDetails = {
      date: selectDate.toISOString().split("T")[0],
      time: selectedTime,
    };
    fetch("http://localhost:3001/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking confirmed:", data);
        setShowConfirmation(false);
        setSelectedTime(null);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="my-calendar">
      <h2>My Calendar</h2>
      <p>Selected Date: {formattedDate}</p>
      <p>Selected Time: {selectedTime || "None"}</p>
      {/* when user select a date on the calendar, onChange func is called  */}
      <div className="calendar-container">
        <Calendar onChange={onChange} value={selectDate} />
      </div>
      <div>
        <h3>Available Times:</h3>
        <ul className="time-slots">
          {chosenTime[selectDate.toISOString().split("T")[0]].map(
            (time, index) => (
              <li
                key={index}
                onClick={() => bookTimeSlot(time)}
                className={`time-slot ${
                  selectedTime === time ? "selected" : ""
                }`}
              >
                {time}
              </li>
            )
          )}
        </ul>
      </div>
      <BookingDisplay />
      <div>
        <Confirmation
          isVisible={showConfirmation}
          selectedTime={selectedTime}
          selectDate={selectDate}
          onConfirm={confirmBooking}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
}
