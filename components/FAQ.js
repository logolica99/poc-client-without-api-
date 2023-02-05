import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homepage/homepage.module.scss";
import Collapse from "react-collapse";

export default function FAQ() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className={styles["faq"]}>
      <div className={styles["faq-title"]}>
        <h2>FAQ</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem netus
          lorem ac, nullam scelerisque curabitur ultrices elementum faucibus.
          Amet lectus feugiat in lacinia cras donec!
        </p>
      </div>
      <div className={styles["faq-container"]}>
        <div className={styles["faq-container-left"]}>
          <img src="/assets/faq.svg" alt="" />
        </div>
        <div className={styles["faq-container-right"]}>
          <Questions open={open1} setOpen={setOpen1} />
          <Questions open={open2} setOpen={setOpen2} />
          <Questions open={open3} setOpen={setOpen3} />
          <Questions open={open4} setOpen={setOpen4} />
        </div>
      </div>
    </div>
  );
}

const Questions = ({ open, setOpen }) => {
  return (
    <div className={styles["faq-container-right-questions"]}>
      <h2
        onClick={() => {
          setOpen(!open);
        }}
      >
        {" "}
        <img
          className={
            open ? styles["orange-chevronActive"] : styles["orange-cev"]
          }
          src="/assets/blue-chevron.svg"
          alt=""
        />{" "}
        Lorem ipsum dolor sit ame?
      </h2>

      <Collapse isOpened={open}>
        <p className={styles["faq-container-right-questions-content"]}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </p>
      </Collapse>
      <span></span>
    </div>
  );
};
