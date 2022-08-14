import React from "react"
import Card from "./UI/Card"
import Subtitle from "./UI/Subtitle"
import LanguageItem from "./LanguageItem"
import '../styles/components/Language.styl'

const Language = ({ languages }) => {
    return (
        <Card id='languages'>
            <Subtitle
                iconName='languages'
                subtitle='Languages'
                className='Languages-title'
            />
            <ul>
                {
                    languages && languages.map((language, index) => {
                        return (
                            <LanguageItem
                                className='Language-item'
                                language={language.name}
                                url={language.url}
                            />
                        )
                    })
                }
            </ul>
        </Card>
    )
}

export default Language