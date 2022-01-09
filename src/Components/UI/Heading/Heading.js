import React from "react";

import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div className={classes.Heading}>
      <h3>Are you looking for </h3>
      <h1>
        Career <span className={classes.pinkBackground}> Opportunities?? </span>
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button onClick={props.getStarted}>Get Started</button>
    </div>
  );
};

export default Heading;
