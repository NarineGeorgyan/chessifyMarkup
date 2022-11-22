import React from "react";
import styles from "./ImagePart.module.css";

const ImagePart = () => {
  return (
    <section className={styles["image-part"]}>
      <h2 className={styles["primary-heading"]}>Our News</h2>
      <div className={styles["chess-image"]}>
        <div className={styles.layout}></div>
        <div className={styles.box}>
          <a href="#">Main article</a>
          <span>18.12.2021</span>
          <p>
            <strong> Raunak Sadhwani:</strong>
            <strong>India's Next Chess Superstar</strong>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImagePart;
