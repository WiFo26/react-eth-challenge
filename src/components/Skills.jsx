import React from "react";
import SkillsItem from "./SkillsItem";
import Card from "./UI/Card";
import Subtitle from "./UI/Subtitle";
import '../styles/components/Skill.styl'

const Skills = ({ skills }) => {
    return <Card id='skills'>
        <Subtitle
            iconName='skills'
            subtitle='Skills'
            className='Skills-title'
        />
        <ul>
            {
                skills && skills.map((skill, index) => {
                    return (
                        <SkillsItem 
                            key={index}
                            className='Skill-item'
                            skill={skill.name}
                            url={skill.url}
                        />
                    )
                })
            }
        </ul>
    </Card>
}

export default Skills