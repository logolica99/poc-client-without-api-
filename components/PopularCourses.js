import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import styles from "../styles/homepage/homepage.module.scss";

export default function PopularCourses({coursesBtn}) {


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
      return <SscRender />;
    } else if (tabs.hsc) {
      return <HscRender />;
    } else if (tabs.admission) {
      return <AdmissionRender />;
    } else if (tabs.skills) {
      return <SkillsRender />;
    }
  };

  return (
    <div className={styles["popularCourses"]}>
      <div className={styles["popularCourses-title"]}>
        <h2>Most Popular Courses</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus
          lorem ac, nullam scelerisque curabitur ultrices elementum faucibus.
          Amet lectus feugiat in lacinia cras donec!
        </p>
      </div>
      <div className={styles["popularCourses-buttons"]}>
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
          className={tabs.admission ? styles["btnActive"] : styles["hello"]}
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
        <Link href="/all_courses">
          <p
            className={styles["coursesBtn"]}
            style={coursesBtn ? { display: "visible" } : { display: "none" }}
          >
            All courses
          </p>
        </Link>
      </div>

      <TabRender />
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
