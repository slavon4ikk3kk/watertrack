import React, {useState} from 'react'
import s from "./DailyNormaModal.module.css"
import images from "../../assets/index.js"
const DailyNormaModal = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };
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
        <form className={s.form}>
          <div>
            <h3 className={s.h3}>Calculate your rate:</h3>
            <label className={s.genderLabel}>
              <input
                type="radio"
                value="male"
                checked={selectedGender === 'male'}
                onChange={handleChange}
                className={s.radio}
              />
              For man
            </label>
            <label className={s.genderLabel}>
              <input 
                type="radio"
                value="female"
                checked={selectedGender === 'female'}
                onChange={handleChange}
                className={s.radio}
              />
              For woman
            </label>
          </div>
          <div>
            <label className={s.label}>
              Your weight in kilograms:
              <input type='number' className={s.input}/>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DailyNormaModal
