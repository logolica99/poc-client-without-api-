import React, { useState } from "react";

import styles from "../../../../styles/dashboard/dashboard.module.scss";

export default function NotEnrolledCard({}) {
  return (
    <div className={styles["notEnrolled"]}>
      <div className={styles["notEnrolled-title"]}>
        <h2>You haven’t enrolled in any Course</h2>
        <p>Don’t stop learning</p>
        <div className={styles["notEnrolled-title-button"]}>
          <p>Add your first Course</p>
        </div>
      </div>
      <div className={styles["notEnrolled-img"]}>
        <img src="/assets/dasboardImg.svg" alt="" />
      </div>
    </div>
  );
}
