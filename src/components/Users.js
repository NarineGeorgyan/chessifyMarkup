import React from "react";
import { twitterNews } from "../data";
import SingleCard from "./SingleCard";
import styles from "./Users.module.css";

import { GrTwitter } from "react-icons/gr";

const Users = () => {
  return (
    <section className="twitter-news">
      <h3 className={styles["twitter-title"]}>Twitter news</h3>
      {twitterNews &&
        twitterNews.map((twitterNew) => (
          <SingleCard key={twitterNew.id} {...twitterNew} />
        ))}
      <div>
        <button className={`btn ${styles["see-more-btn"]}`}>
          <span>
            <GrTwitter className={styles.icon} />
          </span>

          <span>See More</span>
        </button>
      </div>
    </section>
  );
};

export default Users;
