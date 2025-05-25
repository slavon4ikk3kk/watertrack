import React, { useState } from "react";
import s from "./AddWater.module.css";
import images from "../../assets/index.js";
import TimePicker from "../TimePicker/TimePicker.jsx";
const AddWater = () => {
  const [time, setTime] = useState(null);
  const [amount, setAmount] = useState(50);
  function handleInputChange(e){
    setAmount(+e.target.value);
  }
  function handleIncrementChange(){
    if(amount === 5000){
      return
    }
    setAmount(amount + 50)
  }
  function handleDecrementChange(){
    if(amount === 50){ 
      return
    }
    setAmount(amount - 50)
  }
  return (
    <div className={s.overlay}>
      <div className={s.mainModal}>
        <div className={s.head}>
          <p className={s.title}>Add Water</p>
          <img src={images.close}></img>
        </div>
        <p style={{ marginBottom: "12px" }}>Choose a value:</p>
        <p>Amount of water:</p>
        <div className={s.amountWater}>
          <button className={s.controlButton} onClick={handleDecrementChange}>
            <img src={images.minus}></img>
          </button>
          <div className={s.amount}>
            <p className={s.amountP}>{amount}ml</p>
          </div>
          <button className={s.controlButton} onClick={handleIncrementChange}>
            <img src={images.plus}></img>
          </button>
        </div>
        <p style={{ marginBottom: "12px" }}>Recording time:</p>
        <TimePicker value={time} onChange={setTime} />
        <p className={s.p}>Enter the value of the water used:</p>
        <input type="number" className={s.numberInput} onChange={handleInputChange} value={amount}></input>
        <div className={s.save}>
          <p className={s.chosedAmount}>{amount}ml</p>
          <button className={s.buttonSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddWater;
