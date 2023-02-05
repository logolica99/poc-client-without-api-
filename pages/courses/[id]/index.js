import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/courseCategory/courseCategory.module.scss";

import Nav from "../../../components/Nav";
import HamburgerMenu from "../../../components/HamburgerMenu";
import SubjectSlider from "../../../components/SubjectSlider";
import Footer from "../../../components/Footer";

const Course = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  useEffect(() => {
    setCategory(router.query.id);
    
  });
  const [tabs, setTabs] = useState({
    all_courses: false,
    admission: false,
    ssc: false,
    hsc: false,
    skills: false,
  });

  useEffect(()=>{
    const dummy = {
      all_courses:false,
      ssc: false,
      hsc: false,
      admission: false,
      skills: false,
    };
    dummy[category] = true;
    setTabs(dummy);
    console.log(tabs)
  },[category])

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

  const Hero = () => {
    return (
      <>
        <div className={styles["courseCategory-hero"]}>
          <h1>{category ? category.toUpperCase() : <></>} CORNER</h1>
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

  return (
    <>
      <Nav tabs={tabs}/>
      <HamburgerMenu />
      <div id="withoutNav" className={styles["withoutNav"]}>
        <Hero />
        {category ? (
          <SubjectSlider subjects={data[0].courses[category]} />
        ) : (
          <></>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Course;
