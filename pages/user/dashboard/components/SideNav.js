import React from "react";
import styles from "../../../../styles/dashboard/dashboard.module.scss";

export default function SideNav() {
  return (
    <div className={styles["sideNav"]}>
      <div className={styles["sideNav-logo"]}>
        <img src="/assets/logo-only.svg" alt="" />
      </div>
      <div className={styles["sideNav-links"]}>
        <div className={styles["sideNav-links-single"]}>
          <img src="/assets/myCourses.svg" alt="" />
          <p>My Courses</p>
        </div>
        <div className={styles["sideNav-links-single"]}>
          <img src="/assets/star.svg" alt="" />
          <p>Recommended Courses</p>
        </div>
        <div className={styles["sideNav-links-single"]}>
          <img src="/assets/circleUser-black.svg" alt="" />
          <p>Edit Profile</p>
        </div>
      </div>
    </div>
  );
}
