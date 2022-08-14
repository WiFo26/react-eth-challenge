import React from "react";
import Card from "./UI/Card";
import '../styles/components/AcademicItem.styl'

const AcademicItem = ({
    className,
    carreer,
    college,
    description,
    endDate,
    startDate,
    url
}) => {
    return (
        <li>
            <Card className={className}>
                <img src={url} />
                <div className="academic-info">
                    <h3>{carreer}</h3>
                    <h4>{college}</h4>
                    <p className="dates">{startDate} - {endDate}</p>
                    <p>{description}</p>
                </div>
            </Card>
        </li>
    )
}

export default AcademicItem