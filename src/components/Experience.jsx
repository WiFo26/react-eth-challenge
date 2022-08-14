import React from "react";
import Card from "./UI/Card";
import Subtitle from "./UI/Subtitle";
import ExperienceItem from "./ExperienceItem";
import '../styles/components/Experience.styl'

const Experience = ({ experiences }) => {
    return (
        <Card id='experience'>
            <Subtitle
                iconName='experience'
                subtitle='Experience'
                className='Experience-title'
            />
            <ul>
                {
                    experiences && experiences.map((experience, index) => {
                        return (
                            <ExperienceItem
                                key={index}
                                className='Experience-item'
                                company={experience.company}
                                endDate={experience.endDate}
                                jobDescription={experience.jobDescription}
                                jobTitle={experience.jobTitle}
                                startDate={experience.startDate}
                                url={experience.urlCompanyLogo}
                            />
                        )
                    })
                }
            </ul>
        </Card>
    )
}

export default Experience