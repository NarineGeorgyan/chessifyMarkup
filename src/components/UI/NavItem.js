import React from "react";
import styles from "../Footer.module.css";

const NavItem = (props) => {
  return (
    <>
      {props.icons &&
        props.icons.map((item) => (
          <li key={item.id}>
            <a href="#" className={styles[`${props.styles}`]}>
              <img src={`${item.image}`} alt={item.name} />
            </a>
          </li>
        ))}
    </>
  );
};

export default NavItem;
