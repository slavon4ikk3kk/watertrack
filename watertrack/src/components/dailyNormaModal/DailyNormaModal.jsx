import React from 'react'
import s from "./DailyNormaModal.module.css"
import images from "../../assets/index.js"
const DailyNormaModal = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <div className={s.label}>
        <h2 className={s.title}>My daily norma</h2>
        <img src={images.close}></img>
        </div>
        <div className={s.formulas}>
        <p className={s.gender}>For girl: <span className={s.formula}>V=(M*0,03) + (T*0,4)</span></p>
        <p className={s.gender}>For man: <span className={s.formula}>V=(M*0,04) + (T*0,6)</span></p>
        </div>
        <p className={s.comment}><span className={s.formula}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
      </div>
    </div>
  )
}

export default DailyNormaModal
