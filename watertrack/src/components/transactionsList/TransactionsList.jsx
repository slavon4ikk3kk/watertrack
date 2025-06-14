import React, { useState } from "react";
import s from "./TransactionsList.module.css";
import images from "../../assets/index.js";
import dateFormat from "dateformat";
const TransactionsList = ({ actionList, setActionList, setcurrentEditObject, setShowAddWater }) => {
  const date = new Date();
  const formattedDate = dateFormat(date, "dddd, mmmm dS");
  function onDelete(id) {
    setActionList((prev) => {
      const newList = prev.filter((action) => {
        return action.id !== id;
      });
      return newList;
    });
  }
  function onEdit(editObject){
    setcurrentEditObject(editObject);
    setShowAddWater(true);
    
  }
  return (
    <div className={s.main}>
      <p className={s.currentDay}>{formattedDate}</p>
      <ul className={s.transactionList}>
        {actionList.map((action) => {
          return (
            <li key={action.id} className={s.transactionWrap}>
              <div className={s.leftSide}>
                <img src={images.glass} />
                <p className={s.amount}>{action.amount} ml</p>
                <p className={s.time}>{dateFormat(action.time, " h:MM TT")}</p>
              </div>
              <div className={s.rightSide}>
                <img className={s.control} src={images.pencil} onClick={()=>{onEdit(action)}}></img>
                <img
                  className={s.control}
                  src={images.trash}
                  onClick={() => {
                    onDelete(action.id);
                  }}
                ></img>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionsList;
