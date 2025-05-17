import React, {useState} from 'react'
import s from "./AddWater.module.css"
import images from "../../assets/index.js"
import TimePicker from '../TimePicker/TimePicker.jsx'
const AddWater = () => {
  const [time, setTime] = useState(null)
  return (
    <div className={s.mainModal}>
      <div className={s.head}>
        <p className={s.title}>Add Water</p>
        <img src={images.close}></img>
      </div>
      <p style={{marginBottom: "12px"}}>Choose a value:</p>
      <p>Amount of water:</p>
      <div className={s.amountWater}>
       <button className={s.controlButton}>
        <img src={images.minus}></img>
       </button>
       <div className={s.amount}>
        <p className={s.amountP}>50ml</p>
       </div>
       <button className={s.controlButton}>
        <img src={images.plus}></img>
       </button>
      </div>
      <p style={{marginBottom: "12px"}}>Recording time:</p>
      <TimePicker value={time} onChange={(selected) => setTime(selected[0])} />
      <p className={s.p}>Enter the value of the water used:</p>
      <input type='number'></input>
      <div className={s.save}>
         <p>50ml</p>
         <button className={s.buttonSave}>Save</button>
      </div>
    </div>
  )
}

export default AddWater
