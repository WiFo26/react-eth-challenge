import React from "react"
import Card from "./UI/Card"
import Subtitle from "./UI/Subtitle"
import '../styles/components/Interest.styl'

const Interest = ({ interests }) => {
    return (
        <Card id='interest'>
            <Subtitle
                iconName='interest'
                subtitle='Interest'
                className='Interest-title'
            />
            <div className="Interest-desc">
                <p>I am trying to dive in the <strong>blockchain</strong> and <strong>web3</strong> world. I am starting to understand those big and disruptive technologies. I have this whole feeling of being able to contribute to making the world a better place and having a lot of fun creating and developing new technologies along the way.</p>
                <img src="https://i.imgflip.com/2g8n78.jpg" alt="blockchain everywhere" />
            </div>
        </Card>
    )
}

export default Interest