import React from "react";
import styles from "./NewItems.module.css";

const NewsItem = (props) => {
  return (
    <div className={styles["news-container"]}>
      <div className={styles["news-box"]}>
        <h4 className={styles["secendary-heading"]}>{props.header}</h4>
        <div className={styles.date}>{props.date}</div>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles["news-image-box"]}>
        <img
          src={props.image}
          alt={props.title}
          className={styles["news-image"]}
        />
      </div>
    </div>
  );
};

export default NewsItem;
