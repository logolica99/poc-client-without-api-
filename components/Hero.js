import React from "react";
import Link from 'next/link'
import styles from '../styles/homepage/homepage.module.scss'


export default function Hero() {

    return (
        <div className={styles["hero"]}>
            <div className={styles["hero-left"]}>
                <h1><span style={{color:"#00A9DC"}}>Education</span> even from far away!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus amet ipsum molestiae aperiam perferendis impedit enim necessitatibus vero. Id, rem? Rem dolor ex quia odio repudiandae eligendi, exercitationem adipisci!</p>
                <div className={styles["hero-left-buttons"]}>
                    <Link href="/all_courses">
                        <a >
                            Explore Courses
                        </a>
                    </Link>
                    <Link href="/register">
                        <a >
                           Join for free
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles["hero-right"]}>
                <img src="/assets/heroImg.svg" alt="" />
            </div>
        </div>
    )

}