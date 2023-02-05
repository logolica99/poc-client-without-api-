import React from "react";
import styles from "../../../../styles/profileEdit/profileEdit.module.scss";

export default function Form() {
  return (
    <>
      <div className={styles["profileEdit-form"]}>
        <div className={styles["profileEdit-form-personal"]}>
          <h2>Personal Information</h2>

          <div className={styles["profileEdit-form-personal-form"]}>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="E-mail" />
            </div>
          </div>
        </div>
        <div className={styles["profileEdit-form-pic"]}>
          <div className={styles["profileEdit-form-pic-img"]}>
            <img src="/assets/Anup sq 1.png" alt="" />
            <div className={styles["profileEdit-form-pic-img-camera"]}>
              <img src="/assets/camera.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles["profileEdit-form-preference"]}>
          <h2>Your Preferences</h2>

          <div className={styles["profileEdit-form-personal-form"]}>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="E-mail" />
            </div>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="E-mail" />
            </div>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="E-mail" />
            </div>
          </div>
        </div>
        <div className={styles["profileEdit-form-login"]}>
          <h2>Login Info</h2>

          <div className={styles["profileEdit-form-personal-form"]}>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div className={styles["profileEdit-form-personal-form-single"]}>
              <div
                className={styles["profileEdit-form-personal-form-single-img"]}
              >
                <img src="/assets/circleUser.svg" alt="" />
              </div>
              <input type="text" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
