import React from "react";
import Academic from "../icons/Academic";
import Email from "../icons/Email";
import Experience from "../icons/Experience";
import Interest from "../icons/Interest";
import Language from "../icons/Languages";
import Location from "../icons/Location";
import Phone from "../icons/Phone";
import Profile from "../icons/Profile";
import Project from "../icons/Project";
import Skill from "../icons/Skill";
import '../styles/components/Icon.styl'

const Icon = ({name, className}) => {
    return (
        <span>
            {name === 'profile' && <Profile className={className}/>}
            {name === 'skills' && <Skill className={className}/>}
            {name === 'experience' && <Experience className={className}/>}
            {name === 'academic' && <Academic className={className}/>}
            {name === 'projects' && <Project className={className}/>}
            {name === 'interest' && <Interest className={className}/>}
            {name === 'languages' && <Language className={className}/>}
            {name === 'phone' && <Phone className={className}/>}
            {name === 'email' && <Email className={className}/>}
            {name === 'location' && <Location className={className}/>}
            
        </span>
    )
}

export default Icon