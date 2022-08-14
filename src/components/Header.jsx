import React from "react"
import Card from "./UI/Card"
import '../styles/components/Header.styl'

const Header = ({ children, avatar, fullname }) => {
    return (
        <Card id='header'>
            <img className='profile-photo' src={avatar} alt="profile photo" />
            <div className="info">
                <h1 className="Header-title">{fullname && fullname.toUpperCase()}</h1>
                {children}
            </div>
        </Card>
    )
}

export default Header