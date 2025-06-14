import React from "react";
import s from "./RightPart.module.css";
import TransactionsList from "../transactionsList/TransactionsList";
import images from "../../assets/index.js"
const RightPart = ({setShowAddWater, actionList, setActionList, setcurrentEditObject}) => {
  function openModal(){
    setShowAddWater(true)
  }
  return (
    <div className={s.mainRight}>
      <div>
        <TransactionsList actionList={actionList} setActionList={setActionList} setcurrentEditObject={setcurrentEditObject} setShowAddWater={setShowAddWater}></TransactionsList>
        <div className={s.buttonWrap}>
          <button onClick={openModal} className={s.button}>
            <img src={images.plusButton} />
            <p>Add water</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
