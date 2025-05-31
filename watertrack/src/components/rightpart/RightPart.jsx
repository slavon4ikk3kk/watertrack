import React from "react";
import s from "./RightPart.module.css";
import TransactionsList from "../transactionsList/TransactionsList";
const RightPart = () => {
  return (
    <div className={s.mainRight}>
      <div>
        <TransactionsList></TransactionsList>
      </div>
    </div>
  );
};

export default RightPart;
