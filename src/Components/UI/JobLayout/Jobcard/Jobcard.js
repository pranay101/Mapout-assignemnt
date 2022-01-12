
import classes from "./Jobcard.module.css";
import OverlayDialogueBox from "../../OverlayDialogueBox/OverlayDialogueBox";
import  React , { useState } from "react";

const JobCard = (props) => {

  const [showOverlayDialogueBox,setshowOverlayDialogueBox] = useState(false);
  const moreInfoClickedHandler = () =>{
    setshowOverlayDialogueBox(prevState =>{
      return !prevState;
    })
  }
  return (
    <div>
      {showOverlayDialogueBox? <OverlayDialogueBox data = {props.data} dismiss={setshowOverlayDialogueBox} /> : null}
      <div className={classes.card}>
        <p className={classes.cardTitle}>
          {props.data.title.length < 15
            ? props.data.title
            : props.data.title.substring(0, 15) + "..."}
        </p>
        <p className={classes.cardCompany}>{props.data.company}</p>
        <div className={classes.cardLocation}>
          <p>
            <i className="fas fa-map-marked-alt"></i> {props.data.location}
          </p>
        </div>

        <div className={classes.skills}>
          {props.data.skills ? (
            props.data.skills.slice(0, 5).map((skill, index) => {
              return (
                <p key={index} className={classes.cardSkills}>
                  {skill.length > 8 ? skill.substring(0, 5) + "..." : skill}
                </p>
              );
            })
          ) : (
            <p>
              <a href={props.data.website}>{props.data.website}</a>
            </p>
          )}
        </div>
        <p className={classes.cardExperience}>
          Experience Required: {props.data.experience}
        </p>
        <button onClick={moreInfoClickedHandler}>More Info</button>
      </div>
    </div>
  );
};

export default JobCard;
