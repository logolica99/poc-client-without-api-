import React,{useState} from "react";
import styles from "../styles/allCourses/allcourses.module.scss";

import Nav from "./../components/Nav";
import HamburgerMenu from "./../components/HamburgerMenu";
import CourseCorner from "./../components/CourseCorner";
import PopularCourses from "./../components/PopularCourses";
import Footer from "./../components/Footer";

export default function AllCourses() {
  const [tabs, setTabs] = useState({
    all_courses: true,
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
        <Hero />
        <CourseCorner coursesBtn={false} />
        <PopularCourses />
        <Footer />
      </div>
    </>
  );
}
const Hero = () => {
  return (
    <>
      <div className={styles["allcourses-hero"]}>
        <h1>ALL COURSES</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
          euismod amet eget nam. Rhoncus, laoreet mattis quis massa habitant
          sit. Est lectus pellentesque posuere consectetur et pulvinar non. Ac
          quam leo neque ornare pharetra.
        </p>
      </div>
    </>
  );
};
