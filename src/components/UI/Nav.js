import React from "react";
import { Link } from "react-scroll";

import Button from "./Button";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes["nav-container"]}>
        <ul className={classes["nav-menu"]}>
          <li className={classes["nav-item"]}>
            <Link
              className={classes["nav-link"]}
              activeClass="active"
              to="home"
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link
              className={classes["nav-link"]}
              activeClass="active"
              to="about-me"
              smooth={true}
            >
              About Me
            </Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link
              className={classes["nav-link"]}
              activeClass="active"
              to="projects"
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link
              className={classes["nav-link"]}
              activeClass="active"
              to="contact-me"
              smooth={true}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
