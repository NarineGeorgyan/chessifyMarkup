import React, { useState } from "react";
import styles from "./Header.module.css";
import { headerNav } from "../data";
import Nav from "./UI/Nav";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [close, setClose] = useState(false);
  const [isNav, setIsNav] = useState(false);

  const menuHandler = () => {
    setClose(!close);
    setIsNav(!isNav);
    console.log(isNav);
  };
  return (
    <>
      <header className={styles.header}>
        <a href="#">
          <img
            src="https://chessify.me/dg_static/website/assets/images/logo-svg.svg"
            className="logo"
            alt="logo"
          />
        </a>

        <nav className={`${isNav ? styles["close-nav"] : styles["main-nav"]}`}>
          <ul className={styles["main-nav-list"]}>
            <Nav data={headerNav} styles={"main-nav-link"} />

            <li>
              <a
                className={`${styles["main-nav-link"]} && ${styles["active-link"]}`}
                href="#"
              >
                News
              </a>
            </li>
            <li>
              <a className={styles["main-nav-link"]} href="#">
                <span>Pricing</span>
                <span>
                  {" "}
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M7 17L17 7"
                        stroke="#1F1F25"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9.6665 7H16.9998V14.3333"
                        stroke="#1F1F25"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      ></path>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a className={styles.login} href="#">
                Sign In
              </a>
            </li>
          </ul>
        </nav>

        <button className={styles["btn-mobile-nav"]} onClick={menuHandler}>
          {!close && <RiMenu3Fill className={styles["icon-mobile-nav"]} />}

          {close && <IoCloseOutline className={styles["close-outline"]} />}
        </button>
      </header>
    </>
  );
};

export default Header;
