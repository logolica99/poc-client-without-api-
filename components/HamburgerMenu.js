import React, { useState } from "react";
import Link from 'next/link'




import styles from '../styles/homepage/homepage.module.scss'

export default function HamburgerMenu({  }) {

    
    return (
        <div className={styles["hamburgerMenu"]} id="hamburgerMenu">
            <ul>
                <li >
                    <div className={styles["courses-img"]}>
                        <img src="/assets/courses.svg" alt="" />

                    </div>
                    <div className={styles["courses-text"]}>
                        <div  className={styles["courses-text-title"]}>

                        <p>Courses</p> <img src="/assets/down-chevron.svg" alt="" />
                        </div>
                        <ul>
                            <li>
                                <Link href="/courses/ssc">
                                    <a>SSC corner</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/hsc">
                                    <a>HSC corner</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/admission">
                                    <a>Admission corner</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/skills">
                                    <a>Skills</a>
                                </Link>


                            </li>

                        </ul>
                    </div>
                </li>
                <li>
                    <img src="/assets/info.svg" alt="" />
                    <Link href="#">
                        <a >About</a>
                    </Link>
                </li>
                <li>
                    <img src="/assets/login.svg" alt="" />
                    <Link href="/login">
                        <a >Log In</a>
                    </Link>
                </li>
            </ul>
        </div>

    )
}