import React from "react";

export default function Confirmation() {
  return (
    <div>
      {Confirmation && (
        <>
          <div className="confirmation-overlay"></div>
          <div className="confirmation-modal">
            <p>
              Confirm your booking for {selectedTime} on{" "}
              {selectDate.toDateString()} ?
            </p>
            <button onClick={confirmBooking}>Confirm</button>
            <button onClick={() => setShowConfirmation(false)}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}
