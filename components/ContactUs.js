import React from "react";
import Link from 'next/link'
import styles from '../styles/homepage/homepage.module.scss'

export default function ContactUs() {
    return (
        <div className={styles["contactUs"]}>
            <div className={styles["contactUs-title"]}>
                <h2>
                    Contact Us
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum faucibus. Amet lectus feugiat in lacinia cras donec!
                </p>
            </div>
            <div className={styles["contactUs-form"]}>
                <div className={styles["contactUs-form-nameEmail"]}>

                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                </div>
                <textarea type="text" placeholder="Your Message"/>
            <div className={styles["contactUs-submit"]}>
                <button>
                    Submit
                </button>
            </div>
            </div>
        </div>
    )
}