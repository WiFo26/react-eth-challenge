import React from "react";
import Card from "./UI/Card";
import Subtitle from "./UI/Subtitle";
import AcademicItem from "./AcademicItem";
import '../styles/components/Academic.styl'

const Academic = ({ academics }) => {
    return <Card id='academic'>
        <Subtitle
            iconName='academic'
            subtitle='Academic'
            className='Academic-title'
        />
        <ul>
            {
                academics && academics.map((academic, index) => {
                    return (
                        <AcademicItem
                            key={index}
                            className='Academic-item'
                            carreer={academic.degree}
                            college={academic.institution}
                            description={academic.description}
                            endDate={academic.endDate}
                            startDate={academic.startDate}
                            url={academic.url}
                        />
                    )
                })
            }
        </ul>
    </Card>
}

export default Academic