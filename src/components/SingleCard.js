import React from "react";
import styles from "./SingleImage.module.css";

const SingleCard = (props) => {
  return (
    <>
      <div className={styles["card-body"]}>
        <div className={styles["card-wrapper"]}>
          <div className={styles["card-img"]}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={styles["user-title"]}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.subTitle}>{props.subTitle}</span>
          </div>
          <div className={styles.icon}>
            <a href="#">
              <img
                src="https://chessify.me/dg_static/website/assets/images/twitter-logo.svg"
                alt="twitter"
              />
            </a>
          </div>
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default SingleCard;
