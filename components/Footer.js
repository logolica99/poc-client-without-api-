import React from "react";
import Link from 'next/link'
import styles from '../styles/homepage/homepage.module.scss'


export default function Footer() {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-container"]}>
                <div className={styles["footer-container-left"]}>
                    <Link href="/">
                        <a className={styles["footer-container-left-logo"]}>

                            <img src="/assets/footerLogo.svg" alt="" />
                            <h1 >PRODIGY OF <span>CHEMISTRY</span></h1>
                        </a>

                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum faucibus. Amet lectus feugiat in lacinia cras donec!
                    </p>
                    <div className={styles["footer-container-left-socials"]}>
                        <img src="/assets/whatsapp.png" alt="" />
                        <img src="/assets/instagram.png" alt="" />
                        <img src="/assets/facebook.png" alt="" />
                        <img src="/assets/linkedin.png" alt="" />
                    </div>

                </div>
                <div className={styles["footer-container-middle"]}>
                    <ul>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>SSC</li>
                        <li>HSC</li>
                        <li>Admission</li>
                        <li>Skills</li>
                    </ul>

                </div>
                <div className={styles["footer-container-right"]}>
                    <ul>
                        <li>Contact us</li>
                        <li><img src="/assets/phone.svg" alt="" /><p>+00215659895621</p></li>
                        <li><img src="/assets/email.svg" alt="" /><p>info@poc.com</p></li>
                        <li><img src="/assets/location.svg" alt="" /><p>ABC, Chittagong</p></li>
                    </ul>
                </div>
            </div>
            <div className={styles["footer-end"]}>
                <p>
                    All rights reserved  to <Link href="#"><a >POC</a>
                    </Link>
                </p>
            </div>
        </div>
    )

}