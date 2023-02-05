import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/subjectCourses/subjectCourses.module.scss";

import Nav from "../../../../components/Nav";
import HamburgerMenu from "../../../../components/HamburgerMenu";
import CourseCard from "../../../../components/CourseCard";
import Footer from "../../../../components/Footer";

export default function SubjectCourses() {
  const router = useRouter();

  const [subjectName, setSubjectName] = useState(router.query.subject);
  const [course, setCourse] = useState(router.query.id);
  useEffect(() => {
    if (typeof router !== "undefined") {
      setSubjectName(router.query.subject);
      setCourse(router.query.id);
    }
  });
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  useEffect(() => {
    const dummy = {
      all_courses: false,
      ssc: false,
      hsc: false,
      admission: false,
      skills: false,
    };
    dummy[course] = true;
    setTabs(dummy);
    console.log(tabs);
  }, [course]);

  const [data, setData] = useState([
    {
      courses: {
        ssc: {
          physics: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Physics Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
          chemistry: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
        },

        hsc: {
          physics: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
          chemistry: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
        },
        admission: {
          physics: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
          chemistry: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
        },
        skills: {
          physics: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
          chemistry: [
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
            {
              title: "Organic Chemistry Full Course (Detailed)",
              viewers: "1.5k",
              videos: "34",
              length: "12 hours",
              prevPrice: "599",
              price: "499",
              image: "https://i.ibb.co/ZdYKJDG/Rectangle-35.png",
            },
          ],
        },
      },
    },
  ]);

  const Content = () => {
    return (
      <>
        <div className={styles["subjectCourses"]}>
          <div className={styles["subjectCourses-title"]}>
            <p className={styles["subjectCourses-title-course"]}>
              {course ? course.toUpperCase() : <></>}
            </p>
            <h2>
              {subjectName ? (
                subjectName.charAt(0).toUpperCase() + subjectName.slice(1)
              ) : (
                <></>
              )}{" "}
              Course
            </h2>
            <p className={styles["subjectCourses-title-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
              euismod amet eget nam. Rhoncus, laoreet mattis quis massa habitant
              sit.
            </p>
          </div>
          <div className={styles["subjectCourses-contents"]}>
            {course ? (
              data[0].courses[course][subjectName].map((item) => {
                return <CourseCard key={Math.floor(Math.random() * 100)}/>;
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Nav tabs={tabs}/>
      <HamburgerMenu />
      <div id="withoutNav" className={styles["withoutNav"]}>
        <Content />
        <Footer />
      </div>
    </>
  );
}
