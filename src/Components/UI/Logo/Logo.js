
import React from "react"
import Classes from "./Logo.module.css"


const Logo = () =>{
    return (
        <div className={[Classes.Logo , Classes.animation].join(' ')}>
            <p>Mapout</p>
        </div>
    )
}

export default Logo;