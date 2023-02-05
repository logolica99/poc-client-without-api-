import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import CourseCard from "../../../../components/CourseCard";


import styles from "../../../../styles/dashboard/dashboard.module.scss";

export default function RecommendedCourses({  }) {
  const TabRender = () => {
    return <SscRender />;
  };

  return (
    <div className={styles["recommendedCourses"]}>
      <div className={styles["recommendedCourses-title"]}>
        <h2>Recommended Courses</h2>
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
    <div className={styles["recommendedCourses-slider"]}>
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
