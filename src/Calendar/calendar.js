import React, { useState } from "react";
import Calendar from "react-calendar";

const generateTime = (date) => {
  const formattedDate = date.toISOString().split("T")[0];
  const morningSlots = ["05:00", "06:00"];
  const eveningSlots = ["17:00", "18:00"];

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
  const [showConfirmation, setConfirmation] = useState(false);

  const bookTimeSlot = (time) => {
    setSelectedTime(time);
    setConfirmation(true);
  };

  const onChange = (date) => {
    setSelectDate(date);
    console.log(date);
  };
  const selectedDate = generateTime(selectDate);

  const confirmBooking = () => {
    alert(`You selected ${selectedDate} on ${selectDate.toDateString()}`);
  };

  return (
    <div className="my-calendar">
      <h2>My Calendar</h2>
      {/* when user select a date on the calendar, onChange func is called  */}
      <div className="calendar-container">
        <Calendar onChange={onChange} value={selectDate} />
      </div>
      <div>
        <h3>Available Times:</h3>
        <ul className="time-slots">
          {selectedDate[selectDate.toISOString().split("T")[0]].map(
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
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>
            Confirm your booking for {selectedDate} on{" "}
            {selectDate.toDateString()} ?
          </p>
          <button onClick={confirmBooking}>Confirm</button>
          <button onClick={() => setConfirmation(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
