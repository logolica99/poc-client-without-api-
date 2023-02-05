import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import styles from '../styles/homepage/homepage.module.scss'

export default function Partners() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
     
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className={styles["partners"]}>
            <div className={styles["partners-title"]}>
                <h2>
                    Our Partners
                </h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus lorem ac, nullam scelerisque curabitur ultrices elementum faucibus. Amet lectus feugiat in lacinia cras donec!
                </p>
            </div>
            <div className={styles["partners-slide"]}>


                <Slider {...settings}>
                    <div className={styles["partners-slide-cards"]}>
                        <div className={styles["partners-slide-cards-single"]}>
                            <img src="/assets/companyLogo1.svg" alt="" />
                        </div>



                    </div>
                    <div className={styles["partners-slide-cards"]}>
                        <div className={styles["partners-slide-cards-single"]}>
                            <img src="/assets/companyLogo2.svg" alt="" />
                        </div>



                    </div>
                    <div className={styles["partners-slide-cards"]}>
                        <div className={styles["partners-slide-cards-single"]}>
                            <img src="/assets/companyLogo3.svg" alt="" />
                        </div>




                    </div>
                    <div className={styles["partners-slide-cards"]}>
                        <div className={styles["partners-slide-cards-single"]}>
                            <img src="/assets/companyLogo3.svg" alt="" />
                        </div>



                    </div>

                </Slider>
            </div>
        </div>

    )
}