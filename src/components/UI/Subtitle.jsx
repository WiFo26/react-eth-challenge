import React from "react";
import Icon from "../../containers/Icon";
import '../../styles/components/Subtitle.styl'

const Subtitle = ({ iconName, subtitle }) => {
    return (
        <div className="subtitle">
            <Icon
                name={iconName}
                className='profile-subtitle-icon' 
            />
            <h3>{subtitle}</h3>
        </div>
    )
}

export default Subtitle