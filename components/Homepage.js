import React, { useState } from "react";
import styles from "../styles/homepage/homepage.module.scss";

import Nav from "./Nav";
import HamburgerMenu from "./HamburgerMenu";
import Hero from "./Hero";
import CourseCorner from "./CourseCorner";
import PopularCourses from "./PopularCourses";
import Features from "./Features";
import StudentsOpinion from "./StudentsOpinion";
import FAQ from "./FAQ";
import Partners from "./Partners";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

export default function Homepage() {
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  return (
    <div>
      <Nav tabs={tabs}/>
      <HamburgerMenu />
      <div id="withoutNav" className={styles["withoutNav"]}>
        <Hero />
        <CourseCorner />
        <PopularCourses coursesBtn={true} />
        <Features />
        <StudentsOpinion />
        <FAQ />
        <Partners />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
