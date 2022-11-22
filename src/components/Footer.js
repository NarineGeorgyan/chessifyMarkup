import React from "react";
import styles from "./Footer.module.css";
import Nav from "./UI/Nav";
import { footerNav } from "../data";
import { icons } from "../data";
import NavItem from "./UI/NavItem";

const Footer = () => {
  return (
    <>
      <section className="part1">
        <div className={styles["footer-logo"]}>
          <img
            src="https://chessify.me/dg_static/website/assets/images/logo-svg.svg"
            className="logo"
            alt="logo"
          />
        </div>
        <ul className={styles["footer-nav"]}>
          <Nav data={footerNav} styles={"footer-nav-link"} />
        </ul>
      </section>
      <section className="part2">
        <nav className={styles["nav-wrapper"]}>
          <ul className={styles["footer-nav"]}>
            <NavItem icons={icons} styles={"icons-nav-link"} />
          </ul>
          <ul className={styles.store}>
            <li>
              <a href="https://apps.apple.com/us/app/chessify/id1397066775">
                <div className={styles.app}> aaaaaa</div>
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.fimetech.chessfimee&hl=en_US&pli=1">
                <div className={styles.google}>nnnnnn</div>
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.end}>
          <span className={styles.mailto}>
            <a href="mailto:info@chessify.me" className={styles["mailto-link"]}>
              info@chessify.me
            </a>
          </span>
          <span className={styles.copyright}>
            Copyright © 2016-2022 Chessify, Inc. All Rights Reserved.
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
