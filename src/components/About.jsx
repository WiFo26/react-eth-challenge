import React from "react"
import Icon from "../containers/Icon"
import '../styles/components/About.styl'

const About = ({
    address,
    email,
    github,
    linkedin,
    phone,
    website,
    profession
}) => {
    return (
        <div className="about">
            <h3 className="About-title">{profession} </h3>
            <ul className="about-list">
                <li className="About-item">
                    <Icon name='phone' className='icon-phone-about' />
                    {phone}
                </li>
                <span className="box-separator"></span>
                <li className="About-item">
                    <Icon name='email' className='icon-email-about' />
                    {email}
                </li>
            </ul>
            <ul className="about-list">
                <Icon name='location' className='icon-location-about' />
                <li className="About-item">{address}</li>
            </ul>
            <ul className="about-list">
                <li className="About-item">
                    <a
                        href={linkedin}
                        target='_blank'
                    >
                        <img src="linkedin.svg" alt="linkedin logo" />
                    </a>
                </li>
                <span className="box-separator"></span>
                <li className="About-item">
                    <a
                        href={github}
                        target='_blank'
                    >
                        <img src="github.svg" alt="github logo" />
                    </a>
                </li>
                <span className="box-separator"></span>
                <li className="About-item">
                    <a
                        href={website}
                        target='_blank'
                    >
                        <img src="twitter.svg" alt="twitter logo" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default About