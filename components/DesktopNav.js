import React from "react";
import styles from "../styles/dashboard/dashboard.module.scss";

export default function DesktopNav() {
  return (
    <div style={{ backgroundColor: "#FAFCFE" }}>
      <div className={styles["desktopNav"]}>
        <div className={styles["desktopNav-left"]}>
          <div className={styles["desktopNav-left-browse"]}>
            <p>
              Browse
            </p>
            <img src="/assets/down-chevron.svg" alt="" />
          </div>
          <p>My Courses</p>

          <div className={styles["desktopNav-left-search"]}>
            <input type="text" placeholder="What do you want to learn?" />
            <div className={styles["desktopNav-left-search-img"]}>
              <img src="/assets/magnifier.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles["desktopNav-right"]}>
          <img src="/assets/notification.svg" alt="" />
          <div className={styles["desktopNav-right-profile"]}>
            <img src="/assets/Anup sq 1.png" alt="" />
            <p>Anup Bhowmik</p>
            <p>Student</p>
          </div>
          <img src="/assets/triple-dot-menu.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
