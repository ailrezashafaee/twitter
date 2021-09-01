import React from 'react';
import {RiMoreLine} from 'react-icons/ri';
import './SidebarProfileInf.css';
function SidebarProfileInf(props) {
    return (
        <div className="sidebarPcontainer">
            <div className="sidebarInf">    
                <img src={props.src} alt={props.name}/>
                <div>
                    <h4>{props.name}</h4>
                    <p>@{props.username}</p>
                </div>
            </div>
            <div className="sidebarmore">
                    <RiMoreLine/>
            </div>
        </div>
    )
}

export default SidebarProfileInf
