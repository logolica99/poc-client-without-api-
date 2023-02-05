import React from "react";
import styles from "../styles/registerpage/registerpage.module.scss";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <>
      <div className={styles["register-body"]}>
        <div className={styles["register-body-title"]}>
          <h1>
            {" "}
            <span style={{ color: "#00A9DC" }}>Welcome,</span> new Learner
          </h1>
        </div>
        <div className={styles["register-body-form"]}>
        <div className={styles["register-body-form-input"]}>
            <img src="/assets/userForm.svg" alt="" />
            <input
              type="text"
              className={styles["register-body-form-input-name"]}
              placeholder="Name"
            />
          </div>
          <div className={styles["register-body-form-input"]}>
            <img src="/assets/mobileNumber.svg" alt="" />
            <input
              type="text"
              className={styles["register-body-form-input-mobile"]}
              placeholder="Mobile Number"
            />
          </div>
          <div className={styles["register-body-form-input"]}>
            <img src="/assets/key.svg" alt="" />
            <input
              type="password"
              className={styles["register-body-form-input-password"]}
              placeholder="Password"
            />
          </div>

       
         
          <button className={styles["register-body-form-submit"]}>Register</button>
          <div className={styles["register-body-form-register"]}>
            <p>Already have an Account?</p>
            <Link href="/login">
              <a className={styles["register-body-form-register-desktop"]} >Login</a>
            </Link>
            <Link href="/login">
              <a className={styles["register-body-form-register-mobile"]} >Login</a>
            </Link>
          </div>
        </div>
        <div className={styles["register-body-img"]}>
          <img src="/assets/loginPoster.svg" alt="" />
        </div>
      </div>
    </>
  );
}
