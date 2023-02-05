import React from "react";
import styles from "../../../../styles/singleCourse/singleCourse.module.scss";
import CourseContent from "./CourseContents";

import DetailedInfoTab from "./DetailedInfoTab";

export default function CourseBody() {
  return (
    <>
      <div className={styles["courseBody"]}>
        <div className={styles["courseBody-title"]}>
          <h2>Organic Chemistry for Beginners</h2>
          <div className={styles["courseBody-title-info"]}>
            <p>Chemistry 1st paper</p>
            <ul>
              <li>Class 11 - 12</li>
              <li>Add to Cart</li>
            </ul>
          </div>
        </div>
        <div className={styles["courseBody-costing"]}>
          <div className={styles["courseBody-costing-info"]}>
            <p>৳ 599</p>
            <h4>৳ 499</h4>
            <div className={styles["courseBody-costing-info-button"]}>
              <p>
                Enroll Now
                <img src="/assets/tick.svg" alt="" />
              </p>
            </div>
          </div>
          <div className={styles["courseBody-costing-buttons"]}>
            <img src="/assets/black-heart.svg" alt="" />
            <img src="/assets/black-save.svg" alt="" />
          </div>
        </div>
        <div className={styles["courseBody-video"]}>
          <img src="/assets/video.svg" alt="" />
        </div>
        <div className={styles["courseBody-instructors"]}>
            <h4>Course Teachers</h4>
            <div className={styles["courseBody-instructors-all"]}>
                <div className={styles["courseBody-instructors-all-single"]}>
                    <img src="/assets/instructor.png" alt="" />
                    <p>Emran Mustafa</p>
                    <h6>BUET</h6>
                </div>
                <div className={styles["courseBody-instructors-all-single"]}>
                    <img src="/assets/instructor.png" alt="" />
                    <p>Emran Mustafa</p>
                    <h6>BUET</h6>
                </div>
                <div className={styles["courseBody-instructors-all-single"]}>
                    <img src="/assets/instructor.png" alt="" />
                    <p>Emran Mustafa</p>
                    <h6>BUET</h6>
                </div>
            </div>
        </div>
        <div className={styles["courseBody-detailedInfo"]}>

            <DetailedInfoTab/>

        </div>
        <div className={styles["courseBody-info"]}>
            <div  className={styles["courseBody-info-cards"]}>
                <div className={styles["courseBody-info-cards-single"]}>
                    <h4>1.5k</h4>
                    <p>Students</p>
                </div>
                <div className={styles["courseBody-info-cards-single"]}>
                    <h4>1.5k</h4>
                    <p>Videos</p>
                </div>
                <div className={styles["courseBody-info-cards-single"]}>
                    <h4>1.5k</h4>
                    <p>Lectures</p>
                </div>
                <div className={styles["courseBody-info-cards-single"]}>
                    <h4>1.5k</h4>
                    <p>Exams</p>
                </div>
                <div className={styles["courseBody-info-cards-single"]}>
                    <h4>1.5k</h4>
                    <p>Discussion</p>
                </div>
                <div className={styles["courseBody-info-cards-single"]}>
                    <h4>1.5k</h4>
                    <p>Solve Class</p>
                </div>
            </div>

            <div className={styles["contents"]}>
              <CourseContent/>
            </div>

        </div>
      </div>
    </>
  );
}
