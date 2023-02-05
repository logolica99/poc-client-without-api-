import React from "react";
import styles from "../../../../styles/singleCourse/singleCourse.module.scss";

export default function CourseContent() {
  return (
    <div className={styles["courseContent"]}>
      <h4 className={styles["hide-for-mobile"]}>Course Contents</h4>
      <div className={styles["courseContent-items"]}>
        <div className={styles["courseContent-items-single"]}>
          <div className={styles["courseContent-items-single-title"]}>
            <img src="/assets/lock.svg" alt="" />
            <p>Introduction</p>
          </div>
          <p>2:10</p>
        </div>
        <div className={styles["courseContent-items-single"]}>
          <div className={styles["courseContent-items-single-title"]}>
            <img src="/assets/lock.svg" alt="" />
            <p>Introduction</p>
          </div>
          <p>2:10</p>
        </div>
        <div className={styles["courseContent-items-single"]}>
          <div className={styles["courseContent-items-single-title"]}>
            <img src="/assets/lock.svg" alt="" />
            <p>Introduction</p>
          </div>
          <p>2:10</p>
        </div>
        <div className={styles["courseContent-items-single"]}>
          <div className={styles["courseContent-items-single-title"]}>
            <img src="/assets/lock.svg" alt="" />
            <p>Introduction</p>
          </div>
          <p>2:10</p>
        </div>
        <div className={styles["courseContent-items-single"]}>
          <div className={styles["courseContent-items-single-title"]}>
            <img src="/assets/lock.svg" alt="" />
            <p>Introduction</p>
          </div>
          <p>2:10</p>
        </div>
      </div>
    </div>
  );
}
