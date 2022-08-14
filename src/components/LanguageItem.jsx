import React from "react";
import Card from "./UI/Card";
import '../styles/components/LanguageItem.styl'

const LanguageItem = ({
    className,
    language,
    url
}) => {
    return (
        <li>
            <Card className={className}>
                <img src={url} className={`${language}-logo`} alt={`${language}-logo`}/>
                <strong>{language}</strong>
            </Card>
        </li>
    )
}

export default LanguageItem