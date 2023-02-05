import React from "react";
import Link from 'next/link'
import styles from '../styles/homepage/homepage.module.scss'



export default function Features() {
    return (
        <div className={styles["features"]}>
            <div className={styles["features-title"]}>
                <h2>
                    Features
                </h2>
             
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum faucibus. Amet lectus feugiat in lacinia cras donec!
                </p>
            </div>
            <div className={styles["features-cards"]}>
                <div className={styles["features-cards-single"]}>
                    <img src="/assets/experiencedInstructor.svg" alt="" />
                    <div className={styles["features-cards-single-text"]}>
                        <h3>Experienced Instructor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum!</p>
                    </div>
                </div>
                <div className={styles["features-cards-single"]}>
                    <img src="/assets/detailedTopic.svg" alt="" />
                    <div className={styles["features-cards-single-text"]}>
                        <h3>Detailed Topics</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum!</p>
                    </div>
                </div>

            </div>
            <div className={styles["features-cards"]}>
                <div className={styles["features-cards-single"]}>
                    <img src="/assets/4k.svg" alt="" />
                    <div className={styles["features-cards-single-text"]}>
                        <h3>4K Videos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum!</p>
                    </div>
                </div>
                <div className={styles["features-cards-single"]}>
                    <img src="/assets/lecturesheet.svg" alt="" />
                    <div className={styles["features-cards-single-text"]}>
                        <h3>Lecturesheet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum!</p>
                    </div>
                </div>

            </div>
            <div className={styles["features-cards"]}>
                <div className={styles["features-cards-single"]}>
                    <img src="/assets/quizes.svg" alt="" />
                    <div className={styles["features-cards-single-text"]}>
                        <h3>Quizes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum!</p>
                    </div>
                </div>
                <div className={styles["features-cards-single"]}>
                    <img src="/assets/qna.svg" alt="" />
                    <div className={styles["features-cards-single-text"]}>
                        <h3>QnA</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum!</p>
                    </div>
                </div>

            </div>

        </div>
    )
}