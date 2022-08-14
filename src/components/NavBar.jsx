import React from "react";
import Icon from "../containers/Icon";
import '../styles/components/NavBar.styl'

const NavBar = () => {
    return (
        <nav>
            <ul className="navbar-items">
                <li>
                    <a href="#profile">
                        <Icon name='profile' className='profile-navbar' />
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        <Icon name='skills' className='skills-navbar' />
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <Icon name='experience' className='experience-navbar' />
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#academic">
                        <Icon name='academic' className='academic-navbar' />
                        Academic
                    </a>
                </li>
                {/* <li>
                    <a href="#projects">
                        <Icon name='projects' className='projects-navbar' />
                        Projects
                    </a>
                </li> */}
                <li>
                    <a href="#interest">
                        <Icon name='interest' className='interest-navbar' />
                        Interest
                    </a>
                </li>
                <li>
                    <a href="#languages">
                        <Icon name='languages' className='languages-navbar' />
                        Languages
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar