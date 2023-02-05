import React, { useState } from "react";

import SideNav from "./user/dashboard/components/SideNav";
import DesktopNav from "../components/DesktopNav";
import Nav from "../components/Nav";
import HamburgerMenu from "../components/HamburgerMenu";
import CourseCard from "../components/CourseCard";
import LargeCourseCard from "../components/LargeCourseCard";
import Slider from "react-slick";
import styles from "../styles/myCourses/myCourses.module.scss";
import Footer from "../components/Footer";

export default function MyCourses() {
  const [tabs, setTabs] = useState({
    ssc: true,
    hsc: false,
    admission: false,
    skills: false,
  });

  const setTabsFalse = (v) => {
    const dummy = {
      ssc: false,
      hsc: false,
      admission: false,
      skills: false,
    };
    dummy[v] = true;
    setTabs(dummy);
  };
  const TabRender = () => {
    if (tabs.ssc) {
      return <LargeCourseCard />;
    } else if (tabs.hsc) {
      return <LargeCourseCard />;
    } else if (tabs.admission) {
      return <LargeCourseCard />;
    } else if (tabs.skills) {
      return <LargeCourseCard />;
    }
  };
  return (
    <div>
      <div className={styles["hide-for-mobile"]}>
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
          <div className={styles["myCourses"]}>
            <h1>My Courses</h1>

            <div className={styles["myCourses-buttons"]}>
              <p
                className={tabs.ssc ? styles["btnActive"] : styles["hello"]}
                onClick={() => {
                  setTabsFalse("ssc");
                }}
              >
                SSC
              </p>
              <p
                className={tabs.hsc ? styles["btnActive"] : styles["hello"]}
                onClick={() => {
                  setTabsFalse("hsc");
                }}
              >
                HSC
              </p>
              <p
                className={
                  tabs.admission ? styles["btnActive"] : styles["hello"]
                }
                onClick={() => {
                  setTabsFalse("admission");
                }}
              >
                Admission
              </p>
              <p
                className={tabs.skills ? styles["btnActive"] : styles["hello"]}
                onClick={() => {
                  setTabsFalse("skills");
                }}
              >
                Skills
              </p>
            </div>

            <TabRender />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

const SscRender = () => {
  var settings = {
    dots: false,
    infinite: false,

    speed: 500,

    slidesToShow: 4.5,
    slidesToScroll: 0.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles["popularCourses-slider"]}>
      <Slider {...settings}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Slider>
    </div>
  );
};
const HscRender = () => {
  var settings = {
    dots: false,
    infinite: false,

    speed: 500,

    slidesToShow: 4.5,
    slidesToScroll: 0.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles["popularCourses-slider"]}>
      <Slider {...settings}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Slider>
    </div>
  );
};
const AdmissionRender = () => {
  var settings = {
    dots: false,
    infinite: false,

    speed: 500,

    slidesToShow: 4.5,
    slidesToScroll: 0.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles["popularCourses-slider"]}>
      <Slider {...settings}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Slider>
    </div>
  );
};
const SkillsRender = () => {
  var settings = {
    dots: false,
    infinite: false,

    speed: 500,

    slidesToShow: 4.5,
    slidesToScroll: 0.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles["popularCourses-slider"]}>
      <Slider {...settings}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Slider>
    </div>
  );
};
