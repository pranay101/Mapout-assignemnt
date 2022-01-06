import React from "react";

import classes from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={classes.Heading}>
      <h3>Are you looking for </h3>
      <h1>Career <span className={classes.pinkBackground}> Opporinuties?? </span></h1>
    </div>
  );
};

export default Heading;
