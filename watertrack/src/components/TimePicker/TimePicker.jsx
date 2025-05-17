import React, { useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // можеш вибрати інший стиль
import s from "./TimePicker.module.css";
const TimePicker = ({ value, onChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    const fp = flatpickr(inputRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true,
      defaultDate: value,
      onChange: (selectedDates) => {
        onChange(selectedDates[0]);
      },
    });

    return () => {
      fp.destroy();
    };
  }, [onChange, value]);

  return (
    <input
      type="text"
      ref={inputRef}
      className={s.customInput}
      placeholder="Оберіть час"
      readOnly
    />
  );
};

export default TimePicker;
