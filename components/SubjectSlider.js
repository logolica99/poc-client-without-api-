import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import styles from "../styles/courseCategory/courseCategory.module.scss";
import router from "next/router";

export default function SubjectSlider({ subjects }) {
  const [data, setData] = useState(subjects);

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

  const RenderSlider = ({ subject }) => {
    return (
      <>
        <div className={styles["subjectSlider"]}>
          <div className={styles["subjectSlider-info"]}>
            <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h2>
         
              <p onClick={()=>router.push(window.location.pathname+`/${subject}`)}>See All</p>
           
          </div>
          <div className={styles["subjectSlider-carousel"]}>
            <Slider {...settings}>
              {data[subject].map((course) => {
                return <CourseCard subject={subject} data={course} key={Math.floor(Math.random() * 100)} />;
              })}
            </Slider>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles["popularCourses-slider"]}>
      {Object.keys(data).map((subject) => {
        return <RenderSlider subject={subject} key={subject} />;
      })}
    </div>
  );
}
