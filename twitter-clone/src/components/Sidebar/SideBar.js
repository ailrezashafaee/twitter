import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption/SideBarOption';
import {AiFillHome} from 'react-icons/ai';
import {BsHash ,BsBookmark , BsPerson} from 'react-icons/bs';
import { IoNotificationsOutline } from "react-icons/io5";
import {FaTwitter , FaRegEnvelope} from 'react-icons/fa';
import {RiFileList2Line} from 'react-icons/ri';
import {CgMoreO} from 'react-icons/cg';
function SideBar() {
    return (
        <div className="sideBar">
            <SideBarOption Icon={FaTwitter}/>
            <SideBarOption Icon={AiFillHome} text="Home"/>
            <SideBarOption Icon={BsHash} text="Explore"/>
            <SideBarOption Icon={IoNotificationsOutline} text="Notification"/>
            <SideBarOption Icon={FaRegEnvelope} text="Messages"/>
            <SideBarOption Icon={BsBookmark} text="Bookmarks"/>
            <SideBarOption Icon={RiFileList2Line} text="Lists"/>
            <SideBarOption Icon={BsPerson} text="Profile"/>
            <SideBarOption Icon={CgMoreO} text="More"/>
        </div>
    )
}

export default SideBar
