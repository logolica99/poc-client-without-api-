import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import styles from "../../../../styles/dashboard/dashboard.module.scss";

export default function ProfileInfo() {
  return (
    <div className={styles["profileInfo"]}>
      <div className={styles["profileInfo-text"]}>
        <h2>
          Welcome, <span>Anup!</span>
        </h2>
        <div className={styles["profileInfo-text-cards"]}>
          <div className={styles["profileInfo-text-cards-single"]}>
            <div className={styles["profileInfo-text-cards-single-top"]}>
              <img src="/assets/filledPlayButton.svg" alt="" />
              <p>4</p>
            </div>
            <p>Ongoing</p>
            <p> Courses</p>
          </div>
          <div className={styles["profileInfo-text-cards-single"]}>
            <div className={styles["profileInfo-text-cards-single-top"]}>
              <img src="/assets/blueFilledTick.svg" alt="" />
              <p>4</p>
            </div>
            <p>Completed</p>
            <p> Courses</p>
          </div>
          <div className={styles["profileInfo-text-cards-single"]}>
            <div className={styles["profileInfo-text-cards-single-top"]}>
              <img src="/assets/blueFilledCertificate.svg" alt="" />
              <p>4</p>
            </div>
            <p>Certificates</p>
            <p>Awarded</p>
          </div>
        </div>
        <p>
          Keep learning, your are doing <span>Great.</span>
        </p>
      </div>
      <div className={styles["profileInfo-profile"]}>
        <div className={styles["profileInfo-profile-img"]}>
          <CircularProgressbarWithChildren
            value={50}
            strokeWidth={5}
            styles={buildStyles({
              rotation: 0.5,
              pathColor: "#00a9dc",
              trailColor: "#FFF",
            })}
          >
            <img
             className={styles["profileInfo-profile-img-img"]}
              src="https://i.ibb.co/2PrxnMX/Anup-sq-1.png"
            />
          </CircularProgressbarWithChildren>
        </div>
        <div className={styles["profileInfo-profile-btn"]}>
          <p>Complete your profile</p>
        </div>
      </div>
    </div>
  );
}
