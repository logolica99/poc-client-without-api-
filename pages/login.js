import React, { useState } from "react";
import styles from "../styles/loginpage/loginpage.module.scss";

import Nav from "./../components/Nav";
import HamburgerMenu from "./../components/HamburgerMenu";
import LoginForm from "./../components/LoginForm";
import Footer from "./../components/Footer";

export default function Login() {
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  return (
    <>
      <Nav tabs={tabs}/>
      <HamburgerMenu />
      <div id="withoutNav" className={styles["withoutNav"]}>
        <LoginForm />
        <Footer />
      </div>
    </>
  );
}
