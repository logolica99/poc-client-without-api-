import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import styles from '../styles/homepage/homepage.module.scss'

export default function StudentsOpinion() {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,

        speed: 500,

        slidesToShow: 3.2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    centerMode: true
                }
            },
            {
                breakpoint: 938,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true


                }
            },

        ]
    };
    return (
        <div className={styles["studentsOpinion"]}>
            <div className={styles["studentsOpinion-title"]}>
                <h2>
                    What our students say!
                </h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum faucibus. Amet lectus feugiat in lacinia cras donec!
                </p>
            </div>
            <div className={styles["studentsOpinion-slide"]}>
                <Slider {...settings}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Slider>
            </div>

        </div>
    )
}


const Card = () => {
    return (
        <div className={styles["studentsOpinion-slide-card"]}>
            <img src="/assets/doubleQuote.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tellus nisl ut aliquam et nisi, bibendum maecenas posuere. Viverra vitae neque a ullamcorper dignissim odio facilisis odio odio. Sed volutpat facilisi sodales id ut massa fringilla amet. Sed enim ac faucibus id lectus gravida dolor augue.</p>
            <div className={styles["studentsOpinion-slide-card-user"]}>
                <img src="/assets/avatar.png" alt="" />
                <div className={styles["studentsOpinion-slide-card-user-data"]}>
                    <p>Saul Ramirez</p>
                    <p>HSC 2021 Batch</p>
                </div>
            </div>
        </div>
    )
}