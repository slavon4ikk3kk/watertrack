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
            <ProgressBar percent={200}></ProgressBar>
        </div>
    )
}

export default LeftPart
