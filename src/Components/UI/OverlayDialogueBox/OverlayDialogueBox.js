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
            <p></p>
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
              <p>
                <a href={props.data.website}>{props.data.website}</a>
              </p>
            </div>
          </div>
        </main>
      </div>
      <div
        onClick={dismissOverlayDialogueBoxHandler}
        className={classes.backdrop}
      ></div>
    </div>
  );
};

export default OverlayDialogueBox;

// Object
// company: "FinXL"
// companyId: 659153
// companyInfo: {info: {…}, locations: {…}, ratings: Array(10)}
// companyRating: 3.4
// employability_score: []
// experience: "0"
// jd: "Our client, a large Sydney CBD based finance institute, is looking for a passionate mid-level Python Developer.  About the role • Develop a market risk application • Work closely with the business • Gain hands-on banking domain knowledge  Skills and experience • 3+ years hands-on Python development experience • Exposure to Big Data technologies, Cloudera and/or Spark • Understanding of DevOps and AWS • Keen to learn new technologies • Good communication and stakeholder management experience  What's on offer • 12+ months' engagement working at one of the big banks • Currently work from home with prospect to return to the office 1-2 days per week • Up to $800 including super per day or fix-term salary option available  What's next  If you would like to be considered, please click the apply button or call Julia Leung on 02 8243 6808.  Who we are  FinXL IT Professional Services is an established, innovative Australian company, providing technology enabled business solutions and consulting... services across a number of industries. These include; Government, Telecommunications, Commercial and Finance. We currently have more than 1200 consultants assisting our clients across Australia and are continuing to grow at a rapid pace. Through the delivery of services and implementation of new systems, processes and technology, we assist our clients to gain competitive advantage and reach new heights"
// jobtype: ""
// link: "https://www.finxl.com.au/job/python-developer-8/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
// location: "New South Wales, Australia"
// logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIV9gSjLOcem7R7uMH6Dp6rAvDcOkF7X1Rderx8M1Fq_wiRG2rcAEM8Tk&s"
// logoURL: "https://media.glassdoor.com/sqlm/659153/finxl-squareLogo-1632270067426.png"
// postingDate: "5 hours ago"
// qualification: ['BD']
// skills: (12) ['Python', 'Devops', 'Rapid', 'Market Risk', 'Big Data', 'Stakeholder Management', 'Professional Services', 'Commercial Finance', 'Management', 'Professional', 'Innovative', 'Competitive']
// title: "Python Developer"
// via: "Google"
// website: "www.finxl.com.au"
// [[Prototype]]: Object
