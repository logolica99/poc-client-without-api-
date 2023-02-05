import React, { useState } from "react";
import styles from "../styles/registerpage/registerpage.module.scss";

import Nav from "../components/Nav";
import HamburgerMenu from "../components/HamburgerMenu";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

export default function Register() {
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  return (
    <>
      <Nav tabs={tabs} />
      <HamburgerMenu />
      <div id="withoutNav" className={styles["withoutNav"]}>
        <RegisterForm />
        <Footer />
      </div>
    </>
  );
}
