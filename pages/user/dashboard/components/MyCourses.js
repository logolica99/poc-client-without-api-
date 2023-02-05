import React from "react";
import Slider from "react-slick"; 
import styles from "../../../../styles/dashboard/dashboard.module.scss";
import LargeCourseCard from "../../../../components/LargeCourseCard"


export default function MyCourses() {
  return (
    <div className={styles["myCourses"]}>
      <div className={styles["myCourses-title"]}>
        <div className={styles["myCourses-title-left"]}>
          <h2>My Courses</h2>
          <div className={styles["myCourses-title-left-button"]}>
            <p>See All</p>
          </div>
        </div>
        <div className={styles["myCourses-title-right"]}>
            <p>+</p>
            <p>Add new Course</p>
        </div>
      </div>

      <Courses/>
    </div>
  );
}


const Courses = ()=>{
    var settings = {
        dots: true,
        infinite: false,
    
        speed: 500,
        
      
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        
      
      };
      return (
        <div className={styles["myCourses-slider"]}>
          <Slider {...settings}>
            <LargeCourseCard/>
            <LargeCourseCard/>
            <LargeCourseCard/>
          </Slider>
        </div>
      );
}