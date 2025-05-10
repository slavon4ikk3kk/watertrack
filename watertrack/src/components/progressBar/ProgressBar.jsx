import React from "react";
import s from "./ProgressBar.module.css";
const ProgressBar = ({ percent }) => {
  return (
    <div style={{ flexGrow: "1", paddingBottom: "35px" }}>
      <p className={s.today}>Today</p>
      <div className={s.progressBar}>
        <p className={s.statsStart}>0%</p>
        <p className={s.statsEnd}>100%</p>
        <div
          className={s.track}
          style={{ width: percent > 100 ? 100 + "%" : percent + "%" }}
        >
          <div className={s.circle}>
            {percent > 7 && percent < 95 && (
              <p className={s.percentage}>
                {percent > 100 ? 100 + "%" : percent + "%"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
