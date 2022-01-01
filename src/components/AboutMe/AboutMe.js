import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// ximport { faRegu } from "@fortawesome/free-solid-svg-icons";
// import { faUsers } from "@fortawesome/free-solid-svg-icons";

import faceImg from "../../images/test.jpg";
import classes from "./AboutMe.module.css";

// library.add(faUsers);
library.add(fas);
library.add(fab);

const AboutMe = () => {
  return (
    <section className={classes["about-me"]} name="about-me">
      <div className={classes["about-me-image"]}>
        <div>
          <img src={faceImg} alt="my face" />
          <h3>Kwonmin Bok</h3>
          {/* <div className={classes.icons}> */}
          <ul className={classes.icons}>
            <li>
              <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "itch-io"]} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fas", "user-tie"]} size="2x" />
            </li>
          </ul>
        </div>
      </div>
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
          I'd like to play video games and also participate in game jams in free
          time.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
