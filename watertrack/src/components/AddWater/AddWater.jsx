import React, { useState } from "react";
import s from "./AddWater.module.css";
import images from "../../assets/index.js";
import TimePicker from "../TimePicker/TimePicker.jsx";
import { v4 as uuidv4 } from "uuid";

const AddWater = ({ setShowAddWater, setActionList }) => {
  const [time, setTime] = useState(null);
  const [amount, setAmount] = useState(50);
  const [timeError, settimeError] = useState("");
  function handleInputChange(e) {
    setAmount(+e.target.value);
  }
  function handleIncrementChange() {
    if (amount === 5000) {
      return;
    }
    setAmount(amount + 50);
  }
  function handleDecrementChange() {
    if (amount === 50) {
      return;
    }
    setAmount(amount - 50);
  }

  function closeModal(e) {
    if (e.currentTarget === e.target) {
      setShowAddWater(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    settimeError("");
    if (time === null) {
      settimeError("Choose time");
      return;
    }
    const newAction = { amount, time: time.toString(), id: uuidv4() };
    setActionList((prev) => {
      return [...prev, newAction];
    });
    setShowAddWater(false);
  }
  return (
    <div className={s.overlay} onClick={closeModal}>
      <form className={s.mainModal} onSubmit={handleSubmit}>
        <div className={s.head}>
          <p className={s.title}>Add Water</p>
          <img
            src={images.close}
            onClick={() => {
              setShowAddWater(false);
            }}
            className={s.close}
          ></img>
        </div>
        <p style={{ marginBottom: "12px" }}>Choose a value:</p>
        <p>Amount of water:</p>
        <div className={s.amountWater}>
          <button
            className={s.controlButton}
            onClick={handleDecrementChange}
            type="button"
          >
            <img src={images.minus}></img>
          </button>
          <div className={s.amount}>
            <p className={s.amountP}>{amount}ml</p>
          </div>
          <button
            className={s.controlButton}
            onClick={handleIncrementChange}
            type="button"
          >
            <img src={images.plus}></img>
          </button>
        </div>
        <div>
          <p style={{ marginBottom: "12px" }}>Recording time:</p>
          <TimePicker value={time} onChange={setTime} />
          {time === null && <p className={s.timeError}>{timeError}</p>}
        </div>
        <p className={s.p}>Enter the value of the water used:</p>
        <input
          required="true"
          min={"50"}
          type="number"
          className={s.numberInput}
          onChange={handleInputChange}
          value={amount}
        ></input>
        <div className={s.save}>
          <p className={s.chosedAmount}>{amount}ml</p>
          <button className={s.buttonSave} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWater;
