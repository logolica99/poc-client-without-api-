import React from "react";
import styles from "../styles/myCourses/myCourses.module.scss";

export default function LargeCourseCard() {
  return (
    <div className={styles["largeCourseCard"]}>
      <div className={styles["largeCourseCard-content"]}>
        <img src="/assets/rectangle-banner.png" alt="" />
        <div className={styles["largeCourseCard-content-info"]}>
          <h3>Organic Chemistry Full Course</h3>
          <div className={styles["largeCourseCard-content-info-data"]}>
            <div className={styles["largeCourseCard-content-info-data-single"]}>
              <img src="/assets/userForm.svg" alt="" />
              <p>1.5k</p>
            </div>
            <div className={styles["largeCourseCard-content-info-data-single"]}>
              <img src="/assets/playButton.svg" alt="" />
              <p>35 Lectures</p>
            </div>
            <div className={styles["largeCourseCard-content-info-data-single"]}>
              <img src="/assets/clock.svg" alt="" />
              <p>12 hours</p>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className={styles["largeCourseCard-progress"]}>
          <div className={styles["largeCourseCard-progress-bar"]}>
          <div className={styles["largeCourseCard-progress-bar-inside"]} style={{width:"10%"}}>
            
          </div>
              
          </div>
          <p>
              Continue
          </p>
      </div>
    </div>
  );
}
