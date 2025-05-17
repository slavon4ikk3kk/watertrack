import "flatpickr/dist/themes/material_blue.css";
import React from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const TimePicker = ({ value, onChange }) => {
  return (
    <div style={{ maxWidth: 200, margin: "20px auto" }}>
      <Flatpickr
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: "H:i",
          time_24hr: true,
        }}
        value={value}
        onChange={onChange}
        className="custom-input"
      />
    </div>
  );
};

export default TimePicker;