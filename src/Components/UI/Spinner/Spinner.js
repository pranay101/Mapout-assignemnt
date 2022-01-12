import React from "react"
import classes from "./Spinner.module.css"

const Spinner = (props) =>{
    return(
        <div className={classes.loader}>{props.title}</div>
    )
}


export default Spinner