import React, { useState } from "react";
import JobCard from "./Jobcard/Jobcard";
import classes from "./JobLayout.module.css";

const JobLayout = (props) => {
  const [upperlimit, setUpperLimit] = useState(21);

  let result;
  if (!props.data) result = <p>No jobs found</p>;
  else {
    result = props.data.slice(0, upperlimit).map((job, index) => {
      return <JobCard key={index} data={job} />;
    });
  }

  const loadMoreHandler = () => {
    setUpperLimit((prevstate) => {
      return prevstate + 21;
    });
  };
  return (
    <div className={classes.Master}>
      {props.data.length > 0 ? <h1>Jobs we Found</h1> : <h1>No Jobs Found</h1> }
      
      <div className={classes.JobLayout}>
        {result}
      </div>
      {props.data.length > 21 ? (
          <button className={classes.JobLayoutButton} onClick={loadMoreHandler}>Load More</button>
        ) : null}
    </div>
  );
};

export default JobLayout;
