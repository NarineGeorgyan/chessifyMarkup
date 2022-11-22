import React from "react";
import styles from "../Header.module.css";

const Nav = (props) => {
 
  return (
    <>
      {props.data &&
        props.data.map((item, index) => (
          <li key={index}>
            <a className={`${styles[props.styles]}`} href="#">
              {item}
            </a>
          </li>
        ))}
    </>
  );
};

export default Nav;
