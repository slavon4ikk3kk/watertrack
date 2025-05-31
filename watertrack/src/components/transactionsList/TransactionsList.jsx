import React from 'react'
import s from "./TransactionsList.module.css"
import images from "../../assets/index.js"

const TransactionsList = () => {
  return (
    <div className={s.main}>
      <p className={s.currentDay}>Today</p>
      <ul>
        <li className={s.transactionsList}>
          <div className={s.leftSide}>
          <img src={images.glass} /> 
          <p className={s.amount}>250 ml</p>
          <p className={s.time}>7:00 AM</p>
          </div>
        <div className={s.rightSide}>
          <img src={images.pencil}></img>
          <img src={images.trash}></img>
        </div>
        </li>
      </ul>
    </div>
  )
}

export default TransactionsList
