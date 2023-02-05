import React, { useState } from "react";

import styles from "../../../styles/dashboard/dashboard.module.scss";
import Nav from "../../../components/Nav";
import SideNav from "./components/SideNav";
import HamburgerMenu from "../../../components/HamburgerMenu";
import DesktopNav from "../../../components/DesktopNav";
import ProfileInfo from "./components/ProfileInfo";
import MyCourses from "./components/MyCourses";
import NotEnrolledCard from "./components/NotEnrolledCard";
import RecommendedCourses from "./components/RecommendedCourses";
import Footer from "../../../components/Footer";

export default function Dashboard() {
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  return (
    <div >
      <div className={styles["hide-for-mobile"]} >
        <SideNav />
      </div>
      <div className={styles["sideNavPush"]}>
        <div className={styles["hide-for-mobile"]}>
          <DesktopNav />
        </div>
        <div className={styles["hide-for-desktop"]}>
          <Nav tabs={tabs} />
          <HamburgerMenu />
        </div>
        <div
          id="withoutNav"
          className={styles["withoutNav"]}
          style={{ backgroundColor: "#FAFCFE" }}
        >
          <ProfileInfo />
          <MyCourses />
          <NotEnrolledCard />
          <RecommendedCourses />
          <Footer/>
        
        </div>
      </div>
    </div>
  );
}
