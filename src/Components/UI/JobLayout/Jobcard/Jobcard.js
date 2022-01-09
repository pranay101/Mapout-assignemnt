import classes from "./Jobcard.module.css";

const data = {
  title: "AWS Java Developer",
  company: "tcg digital solutions pvt ltd",
  location: "Kolkata, West Bengal",
  jd: "Experience 3 to 5 yearsDesired SkillsAWS Knowledge (must have) Lambda, AppSync, Dynamo DBJS (must have) Node.JSRequired Skills:AWS Knowledge (preferred to have) API Gateway, EC2, Step Function, Cloudwatch, EKS. CloudFormationLanguage (good to have) Java , J2EE, JMS, Hibernate, Micro Service, Spring boot, Spring Cloud, Spring Integration.Other (good to have) JMS(Like MQ, Tibco), Kafka/KinesisDatabase (good to have) Oracle, Any No SQL DB like Couchbase, MongoDBJS (good to have) Angular/React JSMust be a developer who has built the solutions using Java before and now providing solutions using AWS/Java/JS.",
  link: "https://www.timesjobs.com/job-detail/aws-java-developer-tcg-digital-solutions-pvt-ltd-kolkata-3-to-5-yrs-jobid-eoIK3g1FIzlzpSvf__PLUS__uAgZw==?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
  logo: "",
  postingDate: "2 days ago",
  jobtype: "Full-time",
  via: "Google",
  employability_score: [
    {
      user_id: "A",
      employability_score: {
        skillScore: 21.707777881622317,
        totalScore: 55.988282321324476,
        yearScore: 9.355069850316177,
        degreeScore: 24.925434589385986,
        industryScore: 0,
      },
    },
  ],
  skills: ["Spring", "Sql", "Api Gateway", "Spring Boot", "Integration"],
  qualification: ["MS"],
  experience: "0",
  user_employability_score: {
    skillScore: 21.707777881622317,
    totalScore: 55.988282321324476,
    yearScore: 9.355069850316177,
    degreeScore: 24.925434589385986,
    industryScore: 0,
  },
};

const JobCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <p className={classes.cardTitle}>{props.title}</p>
        <p className={classes.cardCompany}>{props.company}</p>
        <div className={classes.cardLocation}>
          
          <p><i class="fas fa-map-marked-alt"></i> {props.location}</p>
        </div>

        <div className={classes.skills}>
        {
          props.skills.slice(0,5).map( skill => {
            return <p className={classes.cardSkills}>{skill}</p>
          })
        }
        </div>
        <p className={classes.cardExperience}>Experience Required: {props.experience}</p>
      </div>
    </div>
  );
};

export default JobCard;
