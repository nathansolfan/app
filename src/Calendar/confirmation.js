import React from "react";

const Confirmation = ({
  isVisible,
  selectDate,
  selectedTime,
  onConfirm,
  onCancel,
}) => {
  if (!isVisible) return null;

  return (
    <>
      <div className="confirmation-overlay"></div>
      <div className="confirmation-modal">
        <p>
          Confirm your booking for {selectedTime} on {selectDate.toDateString()}{" "}
          ?
        </p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  );
};

export default Confirmation;
