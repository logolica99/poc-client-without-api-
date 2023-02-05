import React, { useState } from "react";
import styles from "../../../styles/profileEdit/profileEdit.module.scss";

import SideNav from "../../user/dashboard/components/SideNav";
import DesktopNav from "../../../components/DesktopNav";
import Nav from "../../../components/Nav";
import HamburgerMenu from "../../../components/HamburgerMenu";
import Form from "./components/Form";
import Footer from "../../../components/Footer";

export default function ProfileEdit() {
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });
  return (
    <div>
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
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
}
