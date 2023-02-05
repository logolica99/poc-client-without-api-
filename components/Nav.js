import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Link from "next/link";
import styles from "../styles/homepage/homepage.module.scss";

export default function Nav({ setNavBarOpen, navBarOpen,tabs }) {
  const router = useRouter();

//   const [tabs, setTabs] = useState({
//     all_courses: false,
//     admission: false,
//     ssc: false,
//     hsc: false,
//     skills: false,
//   });

//   const setTabsFalse = (section) => {
//     const dummy = {
//       all_courses: false,
//       ssc: false,
//       hsc: false,
//       admission: false,
//       skills: false,
//     };
//     dummy[section] = true;
//     setTabs(dummy);
//     console.log(tabs);
//   };

  const hamburgerBtn = () => {
    const menu = document.querySelector("#hamburgerMenu");
    const withoutNav = document.querySelector("#withoutNav");
    const navPush = styles["navPush"];
    const menuActive = styles["menuActive"];

    menu.classList.toggle(menuActive);
    withoutNav.classList.toggle(navPush);
  };

  return (
    <div className={styles["homepage-nav-container"]}>
      <div className={styles["homepage-nav"]}>
        <div className={styles["homepage-nav-elements"]}>
          <div
            className={styles["homepage-nav-elements-hamburgerBtn"]}
            onClick={hamburgerBtn}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link href="/">
            <a className={styles["homepage-nav-elements-logo"]}>
              <img
                src="/assets/logo.svg"
                alt=""
                className={styles["hide-for-mobile"]}
              />
              <img
                src="/assets/logo-mobile.svg"
                alt=""
                className={styles["hide-for-desktop"]}
              />
              {/* <h1 className={styles["hide-for-mobile"]}>PRODIGY OF <span>CHEMISTRY</span></h1> */}
            </a>
          </Link>
          <ul className={` ${styles["homepage-nav-elements-list"]} `}>
            <Link href="/all_courses">
              <li
                className={tabs.all_courses ? styles["isActive"] : styles[""]}
               
              >
                ALL COURSES
              </li>
            </Link>
            <Link href="/courses/ssc">
              <li
                className={tabs.ssc ? styles["isActive"] : styles[""]}
             
              >
                SSC
              </li>
            </Link>
            <Link href="/courses/hsc">
              <li
                className={tabs.hsc ? styles["isActive"] : styles[""]}
        
              >
                HSC
              </li>
            </Link>
            <Link href="/courses/admission">
              <li
                className={tabs.admission ? styles["isActive"] : styles[""]}
        
              >
                ADMISSION
              </li>
            </Link>
            <Link href="/courses/skills">
              <li
                className={tabs.skills ? styles["isActive"] : styles[""]}
     
              >
                SKILLS
              </li>
            </Link>
          </ul>
          <div className={styles["homepage-nav-elements-buttons"]}>
            <Link href="/register">
              <a className={styles["homepage-nav-elements-buttons-register"]}>
                Register
              </a>
            </Link>
            <Link href="/login">
              <a className={styles["homepage-nav-elements-buttons-login"]}>
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
