import React from "react";
import JobCard from "./Jobcard/Jobcard";
import classes from "./JobLayout.module.css"

const JobLayout = (props) => {
  console.log(typeof(props.data));
  let result;
  if(!props.data)
     result = <p>No jobs found</p>
    else
    {
        result  = props.data.map( (job,index) => {
            return <JobCard key={index} data={job} />
        })
    }
  return (
    <div className={classes.JobLayout}>
      { result }
    </div>
  );
};




export default JobLayout;
