import React, { useState } from 'react'
import s from "./TransactionsList.module.css"
import images from "../../assets/index.js"
import dateFormat from "dateformat";
const TransactionsList = ({ actionList, setActionList }) => {
        const date = new Date();
        const formattedDate = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
  return (
 
    <div className={s.main}>
      <p className={s.currentDay}>{formattedDate}</p>
      <ul className={s.transactionList}>
        {actionList.map((action) => {
          return (
            <li key={action.id} className={s.transactionWrap}>
              <div className={s.leftSide}>
                <img src={images.glass} />
                <p className={s.amount}>{action.amount}</p>
                <p className={s.time}>{action.time}</p>
              </div>
              <div className={s.rightSide}>
                <img src={images.pencil}></img>
                <img src={images.trash}></img>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TransactionsList
