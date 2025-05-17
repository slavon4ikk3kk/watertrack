import React from 'react'
import s from "./AddWater.module.css"
import images from "../../assets/index.js"

const AddWater = () => {
  return (
    <div className={s.mainModal}>
      <div className={s.head}>
        <p>Edit the entered amount of water</p>
        <img src={images.close}></img>
      </div>
      <div className={s.modalWrap}>
          <div className={s.modalContainer}>
            
          </div>
      </div>
    </div>
  )
}

export default AddWater
