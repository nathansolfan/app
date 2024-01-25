import React, { useState } from "react";
import Calendar from "react-calendar";

const generateTime = (date) => {
  const formattedDate = date.toISOString().split("T")[0];
  const morningSlots = ["05:00", "07:00"];
  const eveningSlots = ["17:00", "19:00"];

  // combine morning and evening
  const slots = morningSlots.concat(eveningSlots);
  return { [formattedDate]: slots };
};
export default function MyCalendar() {
  // create state for Date - which is the  value of Calendar
  const [selectDate, setSelectDate] = useState(new Date());

  const onChange = (date) => {
    setSelectDate(date);
    console.log(date);
  };

  return (
    <div>
      <h2>My Calendar</h2>
      {/* when user select a date on the calendar, onChange func is called  */}
      <Calendar onChange={onChange} value={selectDate} />
    </div>
  );
}
