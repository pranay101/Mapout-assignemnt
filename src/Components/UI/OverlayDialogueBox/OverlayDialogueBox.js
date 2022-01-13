import React from "react";
import classes from "./OverlayDialogueBox.module.css";



const OverlayDialogueBox = (props) => {
  console.log(props.data);
  const dismissOverlayDialogueBoxHandler = () => {
    props.dismiss();
  };
  return (
    <div>
      <div className={classes.OverlayDialogueBox}>
        <header>
          <h2>{props.data.title}</h2>
        </header>
        <main>
          <div className={classes.seventyPercentOfTotalWIdth}>
            <span>
              <img
                className={classes.comanyLogo}
                alt="Company logo"
                src={props.data.logoURL}
              />
              <p>Company Name: {props.data.company}</p>
            </span>
            <div>
              <p className={classes.description}>
                Description: {props.data.jd}
              </p>
            </div>
            <div className={classes.cardLocation}>
              <p>
                <i className="fas fa-map-marked-alt"></i> {props.data.location}
              </p>
            </div>
            <div className={classes.skills}>
              {props.data.qualification ? (
                <h2 className={classes.textcolorGray}>qualification Required</h2>
              ) : null}
              {props.data.qualification
                ? props.data.qualification.map((qualification, index) => {
                    return (
                      <p key={index} className={classes.cardSkills}>
                        {qualification}
                      </p>
                    );
                  })
                : null}
            </div>
            <p className={classes.fontweightnormal}>Posted: {props.data.postingDate}</p>
          </div>
          <span></span>
          <div className={classes.thirtyPercentOfTotalWIdth}>
            <div className={classes.skills}>
              {props.data.skills ? (
                <h2 className={classes.textcolorGray}>Skills Required</h2>
              ) : null}
              {props.data.skills
                ? props.data.skills.map((skill, index) => {
                    return (
                      <p key={index} className={classes.cardSkills}>
                        {skill}
                      </p>
                    );
                  })
                : null}
            </div>
            <div>
              {
                props.data.website? (<p>
                  <a target="_blank" rel="noopener noreferrer" href={ "https://"+ props.data.website}>Website :- {props.data.website}</a>
                </p>) : null
              }
              {
                props.data.link? (<p>
                  <a target="_blank" rel="noopener noreferrer" href={ props.data.link}>Apply Here :- {props.data.website}</a>
                </p>) : null
              }
              
            </div>
          </div>
        </main>
        <footer>
          <button onClick={dismissOverlayDialogueBoxHandler}>Close</button>
        </footer>
      </div>
      <div
        onClick={dismissOverlayDialogueBoxHandler}
        className={classes.backdrop}
      ></div>
    </div>
  );
};

export default OverlayDialogueBox;
