import React, {useState} from 'react'
import s from "./DailyNormaModal.module.css"
import images from "../../assets/index.js"
const DailyNormaModal = ({setShowDailyNorma, dailyNorma, setDailyNorma}) => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [kg, setKg] = useState(0);
  const [sportTime, setSportTime] = useState(0);
  const [water, setWater] = useState(0);
  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };
  function handleKgChange(e){
    setKg(e.target.value)
  }
  function handleSportTimeChange(e){
    setSportTime(e.target.value)
  }
  function handleWaterChange(e){
    setWater(e.target.value)
  }
  function onSubmit(e){
     e.preventDefault();
     if(water <= 0.5){
      return
     }
     setDailyNorma(water)
     setShowDailyNorma(false)
  }
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <div className={s.label}>
          <h2 className={s.title}>My daily norma</h2>
          <img src={images.close} className={s.close} onClick={()=>{setShowDailyNorma(false)}}></img>
        </div>
        <div className={s.formulas}>
          <p className={s.gender}>For girl: <span className={s.formula}>V=(M*0,03) + (T*0,4)</span></p>
          <p className={s.gender}>For man: <span className={s.formula}>V=(M*0,04) + (T*0,6)</span></p>
        </div>
        <p className={s.comment}><span className={s.formula}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
        <form className={s.form} onSubmit={onSubmit}>
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
            <label className={s.labelWeight}>
              Your weight in kilograms:
              <input type='number' className={s.mainInput} onChange={handleKgChange} value={kg}/>
            </label>
          </div>
          <div>
            <label className={s.labelWeight}>
              The time of active participation in sports or other activities with a high physical. load in hours:
              <input type='number' className={s.mainInput} onChange={handleSportTimeChange} value={sportTime}/>
            </label>
          </div>
          <p>The required amount of water in liters per day: <span>{selectedGender === "male" ? (kg*0.04 + sportTime*0.6).toFixed(2) : (kg*0.03 + sportTime*0.4).toFixed(2)}</span></p>
          <p className={s.p}>Write down how much water you will drink:</p>
          <input onChange={handleWaterChange} value={water} className={s.mainInput}></input>
          <button className={s.button} type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default DailyNormaModal
