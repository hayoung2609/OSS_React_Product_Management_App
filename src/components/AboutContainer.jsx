import React from "react";
import styles from "./AboutContainer.module.css";
import { FaGithub } from "react-icons/fa";

const AboutContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h4>Hayoung Kang</h4>
      <p className="fs-6 w-75 text-center">
        Thank you!
      </p>
      <a
        href="https://github.com/hayoung2609"
        target="blank"
        className="text-dark fs-3"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default AboutContainer;
