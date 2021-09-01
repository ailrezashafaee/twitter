import { Avatar } from '@material-ui/core';
import React from 'react';
import {RiMoreLine} from 'react-icons/ri';
import './SidebarProfileInf.css';
function SidebarProfileInf(props) {
    return (
        <div className="sidebarPcontainer">
            <div className="sidebarInf">    
                <Avatar className="avatar" src={props.src} alt={props.name}/>
                <div className="inf">
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
