import React, { useState } from "react";
import styles from "../../../styles/singleCourse/singleCourse.module.scss";

import SideNav from "../../user/dashboard/components/SideNav";
import CourseBody from "./components/CourseBody";
import DesktopNav from "../../../components/DesktopNav";
import Nav from "../../../components/Nav";

import HamburgerMenu from "../../../components/HamburgerMenu";
import Footer from "../../../components/Footer";

export default function IndividualCourse() {
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  return (
    <>
      <div style={{ backgroundColor: "#FAFCFE" }}>
      <div className={styles["hide-for-mobile"]} >
        <SideNav />
      </div >
        <div className={styles["sideNavPush"]}>
          <div className={styles["hide-for-mobile"]}>
            <DesktopNav />
          </div>
          <div className={styles["hide-for-desktop"]}>
            <Nav tabs={tabs} />
            <HamburgerMenu />
          </div>
          <div id="withoutNav" className={styles["withoutNav"]}>
            <CourseBody />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
