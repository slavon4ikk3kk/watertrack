import React from "react";
import LeftPart from "../components/leftpart/LeftPart";
import Header from "../components/Header/Header";
import s from "./Cabinet.module.css";
import RightPart from "../components/rightpart/RightPart";
const Cabinet = () => {
  return (
    <div>
    <div className={s.container}>
      <Header />
      <div className={s.mainWrap}>
        <LeftPart />
        <RightPart />
      </div>
    </div>
    </div>
  );
};

export default Cabinet;
