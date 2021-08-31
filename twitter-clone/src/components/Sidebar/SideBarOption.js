import React from 'react';

function SideBarOption(props) {
    return (
        <div>
            <props.Icon/>
            <h2>{props.text}</h2>            
        </div>
    )
}

export default SideBarOption;
