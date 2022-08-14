import React from "react";
import Card from "./UI/Card";
import '../styles/components/SkillsItem.styl'

const SkillsItem = ({
    className,
    skill,
    url
}) => {
    return (
        <li>
            <Card className={className}>
                <img src={url} className={`${skill}-logo`} alt={`${skill}-logo`}/>
                <strong>{skill}</strong>
            </Card>
        </li>
    )
}

export default SkillsItem