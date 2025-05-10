import React from 'react'
import s from "./LeftPart.module.css"
import images from "../../assets/index.js"
import ProgressBar from '../progressBar/ProgressBar.jsx'
const LeftPart = () => {
    return (
        <div>
            <div className={s.main}>
                <img src={images.bottleHomePage} className={s.bottleImg}></img>
                <div className={s.normaBlock}>
                    <p className={s.normaTitle}>My daily norma</p>
                    <div className={s.editBlock}>
                        <p className={s.normaAmount}>1.5 L</p>
                        <button className={s.buttonEdit}>Edit</button>
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                <ProgressBar percent={50}></ProgressBar>
                <button className={s.button}>
                    <img src={images.outline} />
                    <p>Add Water</p>
                </button>
            </div>
        </div>
    )
}

export default LeftPart
