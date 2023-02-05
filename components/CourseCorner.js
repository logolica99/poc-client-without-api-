import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homepage/homepage.module.scss";

export default function CourseCorner() {


  return (
    <div className={styles["courseCorner"]}>
      <div className={styles["courseCorner-title"]}>
        <h2>Course Corners</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptatum odio distinctio facere illum, quod ipsa beatae, laudantium
          dolore suscipit debitis corrupti, doloribus modi quam eligendi sit
          adipisci numquam et.
        </p>
      </div>
      <div className={styles["courseCorner-features"]}>
        <div className={styles["courseCorner-features-left"]}>
          <Link href="courses/ssc">
            <div className={styles["courseCorner-features-card"]}>
              <img src="/assets/backpack.svg" alt="" />
              <h3>SSC</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </Link>
          <Link href="courses/hsc">
            <div className={styles["courseCorner-features-card"]}>
              <img src="/assets/backpack.svg" alt="" />
              <h3>HSC</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </Link>
        </div>
        <div className={styles["courseCorner-features-right"]}>
          <Link href="courses/admission">
            <div className={styles["courseCorner-features-card"]}>
              <img src="/assets/graduationHat.svg" alt="" />
              <h3>Admission</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </Link>
          <Link href="courses/skills">
            <div className={styles["courseCorner-features-card"]}>
              <img src="/assets/lightBulbBrain.svg" alt="" />
              <h3>Skills</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
