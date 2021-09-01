import React from 'react';
import './SideBarOption.css';
function SideBarOption({text , Icon}) {
    return (
        <div className="sideBarOption">
            <Icon className="icon"/>
            <p>{text}</p>          
        </div>
    )
}

export default SideBarOption;
