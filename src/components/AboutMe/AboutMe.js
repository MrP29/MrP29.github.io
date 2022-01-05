import React from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import faceImg from "../../images/test.jpg";
import classes from "./AboutMe.module.css";

// library.add(faUsers);
library.add(fas);
library.add(fab);

const AboutMe = () => {
  return (
    <div className={classes["about-me"]} name="about-me">
      <div className={classes["about-me-left-container"]}>
        <div className={classes["about-me-image"]}>
          <div>
            <img src={faceImg} alt="my face" />
            <h3>Kwonmin Bok</h3>
            <ul className={classes.icons}>
              <li>
                <Link
                  className={classes["nav-link"]}
                  activeClass="active"
                  to="contact-me"
                  smooth={true}
                >
                  <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" />{" "}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kwonmin-bok-63a366173/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MrP29"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://mrp29.itch.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={["fab", "itch-io"]} size="2x" />
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={["fas", "user-tie"]} size="2x" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["about-me-right-container"]}>
        <div className={classes["about-me-text"]}>
          <h2>About Me</h2>
          <p>
            Hi, I'm Kwonmin Bok, currently studying Computer Science
            <br /> as a 3rd year student at York University in Toronto, Canada.
          </p>
          <p>
            I have had over 5 year experience in retail and customer service
            field.
          </p>
          <p>
            I'd like to play video games and also participate in game jams in
            free time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
