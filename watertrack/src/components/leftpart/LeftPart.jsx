import React, { useState } from 'react';
import s from './LeftPart.module.css';
import images from '../../assets/index.js';
import ProgressBar from '../progressBar/ProgressBar.jsx';
import AddWater from '../AddWater/AddWater.jsx';

const LeftPart = () => {
  const [showAddWater, setShowAddWater] = useState(false);

  function handleClick() {
    setShowAddWater(true);
  }

  function handleClose() {
    setShowAddWater(false);
  }

  return (
    <div>
      <div className={s.main}>
        <img src={images.bottleHomePage} className={s.bottleImg} alt="Bottle" />
        <div className={s.normaBlock}>
          <p className={s.normaTitle}>My daily norma</p>
          <div className={s.editBlock}>
            <p className={s.normaAmount}>1.5 L</p>
            <button className={s.buttonEdit}>Edit</button>
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <ProgressBar percent={50} />

        <button className={s.button} onClick={handleClick}>
          <img src={images.outline} alt="Add" />
          <p>Add Water</p>
        </button>

        {showAddWater && <AddWater onClose={handleClose} setShowAddWater={setShowAddWater} />}
      </div>
    </div>
  );
};

export default LeftPart;
