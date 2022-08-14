import React from "react";
import Card from "./UI/Card";
import Subtitle from "./UI/Subtitle";
import '../styles/components/Profile.styl'

const Profile = ({ description }) => {
    return (
        <Card id='profile'>
            <Subtitle
                iconName='profile'
                subtitle='Profile'
                className='Profile-title'
            />
            <div className="Profile-desc">
                {description && description.map((desc, index) => {
                    return <p key={index}>{desc}</p>
                })}
            </div>
        </Card>
    )
}

export default Profile