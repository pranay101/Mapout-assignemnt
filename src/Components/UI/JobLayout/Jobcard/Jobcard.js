import { useState } from "react";
import classes from "./Jobcard.module.css";

const JobCard = (props) => {
  const [hoverEffect, sethoverEffect] = useState([classes.overlay]);
  const addOverlayHandler = () => {
    console.log("Mouse Entered");
    sethoverEffect([classes.overlay, classes.DisplayBlock]);
  };

  const removeOverlayHandler = () => {
    sethoverEffect([classes.overlay, classes.DisplayNone]);
  };
  return (
    <div className={classes.xyz}>
      <div className={hoverEffect.join(" ")}>
        <p>enter text</p>
      </div>
      <div
        mouseleave={removeOverlayHandler}
        mouseenter={addOverlayHandler}
        className={classes.card}
      >
        <p className={classes.cardTitle}>
          {props.data.title.length < 18
            ? props.data.title
            : props.data.title.substring(0, 18) + "..."}
        </p>
        <p className={classes.cardCompany}>{props.data.company}</p>
        <div className={classes.cardLocation}>
          <p>
            <i className="fas fa-map-marked-alt"></i> {props.data.location}
          </p>
        </div>

        <div className={classes.skills}>
          {props.data.skills.slice(0, 6).map((skill, index) => {
            return (
              <p key={index} className={classes.cardSkills}>
                {skill.length > 8? skill.substring(0,6) + "..." : skill}
              </p>
            );
          })}
        </div>
        <p className={classes.cardExperience}>
          Experience Required: {props.data.experience}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
