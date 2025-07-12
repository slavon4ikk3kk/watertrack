import React, { useState } from "react";
import s from "./LeftPart.module.css";
import images from "../../assets/index.js";
import ProgressBar from "../progressBar/ProgressBar.jsx";
import AddWater from "../AddWater/AddWater.jsx";
import DailyNormaModal from "../dailyNormaModal/DailyNormaModal.jsx";

const LeftPart = ({
  showAddWater,
  setShowAddWater,
  setShowDailyNorma,
  showDailyNorma,
  setActionList,
  currentEditObject,
}) => {
  function handleClick() {
    setShowAddWater(true);
  }

  function handleClose() {
    setShowAddWater(false);
  }
  function handleOpenDailyNorma() {
    setShowDailyNorma(true)
  }
  return (
    <div>
      <div className={s.main}>
        <img src={images.bottleHomePage} className={s.bottleImg} alt="Bottle" />
        <div className={s.normaBlock}>
          <p className={s.normaTitle}>My daily norma</p>
          <div className={s.editBlock}>
            <p className={s.normaAmount}>1.5 L</p>
            <button className={s.buttonEdit} onClick={handleOpenDailyNorma}>Edit</button>
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <ProgressBar percent={50} />

        <button className={s.button} onClick={handleClick}>
          <img src={images.outline} alt="Add" />
          <p>Add Water</p>
        </button>

        {showAddWater && (
          <AddWater
            onClose={handleClose}
            setShowAddWater={setShowAddWater}
            setActionList={setActionList}
            actionData={currentEditObject}
          />
        )}
        {showDailyNorma && (
          <DailyNormaModal        
            setShowDailyNorma={setShowDailyNorma}
            showDailyNorma={showDailyNorma}
          />
        )}
      </div>
    </div>
  );
};

export default LeftPart;
