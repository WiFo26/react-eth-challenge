import React from "react";
import Card from "./UI/Card";
import '../styles/components/ExperienceItem.styl'

const ExperienceItem = ({
    className,
    company,
    endDate,
    jobDescription,
    jobTitle,
    startDate,
    url
}) => {
    return (
        <li>
            <Card className={className}>
                <img src={url} />
                <div className="experience-info">
                    <h3>{company}</h3>
                    <h4>{jobTitle}</h4>
                    <p className="dates">{startDate} - {endDate}</p>
                    <ul className="job-functions">
                        {
                            jobDescription.map((desc, index) => {
                                return (
                                    <li key={index}>{desc}</li>
                                )
                            })
                        }    
                    </ul>
                </div>
            </Card>
        </li>
    )
}

export default ExperienceItem