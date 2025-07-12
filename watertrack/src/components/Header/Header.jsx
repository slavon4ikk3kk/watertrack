import React from "react";
import s from "./Header.module.css";
import images from "../../assets/index.js"
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.titleWrap}>
        <img src={images.logo} />
        <p className={s.label}>Tracker <br></br>of water</p>
      </div>
      <div className={s.profile}>
         <p>David</p>
         <img src={images.profile}></img>
         <img src={images.arrow}></img>
      </div>
    </header>
  )
}
export default Header;
