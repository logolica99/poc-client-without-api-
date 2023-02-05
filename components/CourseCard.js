import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homepage/homepage.module.scss";




const CourseCard = ({data,subject}) => {
 
  return (
    <div className={styles["popularCourses-card"]}>
      <div className={styles["popularCourses-card-banner"]}>
        <img src="https://i.ibb.co/ZdYKJDG/Rectangle-35.png" alt="" />
        <div className={styles["popularCourses-card-banner-buttons"]}>
          <img src="/assets/heart.svg" alt="" />
          <img src="/assets/cart.svg" alt="" />
        </div>
      </div>
      <div className={styles["popularCourses-card-category"]}>
        <p>HSC 2021</p>
        <p>/</p>
        <p>
          <img src="/assets/formula.svg" alt="" />
            Chemistry
        </p>
      </div>
      <div className={styles["popularCourses-card-title"]}>
        <h4>Organic Chemistry Full Course (Detailed)</h4>
      </div>
      <div className={styles["popularCourses-card-description"]}>
        <div className={styles["popularCourses-card-description-segment"]}>
          <img src="/assets/userForm.svg" alt="" />
          <p>1.5k</p>
        </div>
        <div className={styles["popularCourses-card-description-segment"]}>
          <img src="/assets/playButton.svg" alt="" />
          <p>34 Lectures</p>
        </div>
        <div className={styles["popularCourses-card-description-segment"]}>
          <img src="/assets/clock.svg" alt="" />
          <p>12 hours</p>
        </div>
      </div>
      <div className={styles["popularCourses-card-enroll"]}>
        <div className={styles["popularCourses-card-enroll-price"]}>
          <h4>৳ 499</h4>
          <p>৳ 599</p>
        </div>
        <div className={styles["popularCourses-card-enroll-button"]}>
          <p>Enroll Now</p>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;