import React, { useEffect, useState } from "react";
import LeftPart from "../components/leftpart/LeftPart";
import Header from "../components/Header/Header";
import s from "./Cabinet.module.css";
import RightPart from "../components/rightpart/RightPart";
const Cabinet = () => {
  const [showDailyNorma, setShowDailyNorma] = useState(false);
  const [showAddWater, setShowAddWater] = useState(false);
  const [currentEditObject, setcurrentEditObject] = useState(null);
  const [dailyNorma, setDailyNorma] = useState(()=>{
    const dn = JSON.parse(localStorage.getItem("dailyNorma"))
    if(dn){
      return dn
    }
    return 1.5
  });
  const [actionList, setActionList] = useState(() => {
    const ls = JSON.parse(localStorage.getItem("actionList"))
    if (ls) {
      return ls
    }
    else {
      return []
    }
  });
  useEffect(() => {
    localStorage.setItem("actionList", JSON.stringify(actionList))
  }, [actionList]);
  useEffect(() => {
    localStorage.setItem("dailyNorma", JSON.stringify(dailyNorma))
  }, [dailyNorma]);
  return (
    <div className={s.mainPage}>
      <div className={s.container}>
        <Header />
        <div className={s.mainWrap}>
          <LeftPart showAddWater={showAddWater} setShowAddWater={setShowAddWater} actionList={actionList} setActionList={setActionList} currentEditObject={currentEditObject} showDailyNorma={showDailyNorma} setShowDailyNorma={setShowDailyNorma} dailyNorma={dailyNorma} setDailyNorma={setDailyNorma} />
          <RightPart showAddWater={showAddWater} setShowAddWater={setShowAddWater} actionList={actionList} setActionList={setActionList} setcurrentEditObject={setcurrentEditObject} />
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
