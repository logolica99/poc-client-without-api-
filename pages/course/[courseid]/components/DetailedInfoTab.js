import React, { useState } from "react";
import styles from "../../../../styles/singleCourse/singleCourse.module.scss";
import CourseContent from "./CourseContents";


export default function DetailedInfoTab() {
  const [tabs, setTabs] = useState({
    course_contents: false,
    discussion: false,
    reviews: false,
    descriptions: true,
    resources: false,
  });

  const setTabsFalse = (v) => {
    const dummy = {
      course_contents: false,
      discussion: false,
      reviews: false,
      descriptions: false,
      resources: false,
    };
    dummy[v] = true;
    setTabs(dummy);
  };

  const TabRender = () => {
    if (tabs.descriptions) {
      return <DescriptionRender />;
    } else if (tabs.course_contents) {
        return <CourseContent/>
    } else if (tabs.reviews) {
        return <DescriptionRender />;
    } else if (tabs.discussion) {
        return <DescriptionRender />;
    } else if (tabs.resources) {
        return <DescriptionRender />;
    }
  };

  return (
    <>
      <Navigation tabs={tabs} setTabsFalse={setTabsFalse} />
      <TabRender />
    </>
  );
}

const Navigation = ({ tabs, setTabsFalse }) => {
  return (
    <>
      <div className={styles["courseBody-detailedInfo-nav"]}>
        <p
          className={
            `${styles["hide-for-desktop"]} ${tabs.course_contents ? styles["isActive"] : styles[""]}`
          }
          on
          onClick={() => setTabsFalse("course_contents")}
        >
          Course Contents
        </p>
        <p
         className={
            `${styles["hide-for-desktop"]} ${tabs.descriptions ? styles["isActive"] : styles[""]}`
          }
          onClick={() => setTabsFalse("descriptions")}
        >
          Description
        </p>

        <p
          className={
            `${styles["hide-for-mobile"]} ${tabs.descriptions ? styles["isActive"] : styles[""]}`
          }
          onClick={() => setTabsFalse("descriptions")}
        >
          Course Description
        </p>
        <p className={` ${tabs.reviews ? styles["isActive"] : styles[""]}`} onClick={() => setTabsFalse("reviews")}>Reviews</p>
        <p  className={` ${tabs.discussion ? styles["isActive"] : styles[""]}`} onClick={() => setTabsFalse("discussion")}>Discussion</p>
        <p  className={` ${tabs.resources ? styles["isActive"] : styles[""]}`} onClick={() => setTabsFalse("resources")}>Resources</p>
      </div>
    </>
  );
};

const DescriptionRender = () => {
  return (
    <div className={styles["courseBody-detailedInfo-description"]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  );
};
