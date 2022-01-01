import React from "react";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.home} name="home">
      <h1>Computer Science majoring Student</h1>
      <h3>
        I love to solve problems, and want to contribute to the world with my
        ideas
      </h3>
    </div>
  );
};

export default Home;
