import React from "react";
import styles from "../styles/loginpage/loginpage.module.scss";
import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <div className={styles["login-body"]}>
        <div className={styles["login-body-title"]}>
          <h1>
            {" "}
            <span style={{ color: "#00A9DC" }}>Welcome</span> back, Learner
          </h1>
        </div>
        <div className={styles["login-body-form"]}>
          <div className={styles["login-body-form-input"]}>
            <img src="/assets/mobileNumber.svg" alt="" />
            <input
              type="text"
              className={styles["login-body-form-input-mobile"]}
              placeholder="Mobile Number"
            />
          </div>
          <div className={styles["login-body-form-input"]}>
            <img src="/assets/key.svg" alt="" />
            <input
              type="password"
              className={styles["login-body-form-input-password"]}
              placeholder="Password"
            />
          </div>

       
          <div className={styles["login-body-form-forgot"]}>
            <div className={styles["login-body-form-forgot-check"]}>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <Link href="#">
              <a className={styles["login-body-form-forgot-link"]}>
                Forgot Password?
              </a>
            </Link>
          </div>
          <button className={styles["login-body-form-submit"]}>Login</button>
          <div className={styles["login-body-form-register"]}>
            <p>Don{"'"}t have an account?</p>
            <Link href="/register">
              <a className={styles["login-body-form-register-desktop"]} >Register</a>
            </Link>
            <Link href="/register">
              <a className={styles["login-body-form-register-mobile"]} >Register</a>
            </Link>
          </div>
        </div>
        <div className={styles["login-body-img"]}>
          <img src="/assets/loginPoster.svg" alt="" />
        </div>
      </div>
    </>
  );
}
