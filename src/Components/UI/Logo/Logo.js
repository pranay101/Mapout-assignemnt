
import React from "react"
import Classes from "./Logo.module.css"


const Logo = () =>{
    return (
        <div className={Classes.Logo , Classes.animation}>
            <p>Mapout</p>
        </div>
    )
}

export default Logo;