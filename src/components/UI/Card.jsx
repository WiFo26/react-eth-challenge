import React from "react"
import '../../styles/components/Card.styl'

const Card = ({ children, id, className }) => {
    return (
        <section id={id} className={`card ${className ? className : ''}`}>
            {children}
        </section>
    )
}

export default Card