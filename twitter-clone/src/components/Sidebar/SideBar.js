import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption/SideBarOption';
import {AiFillHome} from 'react-icons/ai';
import {BsHash ,BsBookmark , BsPerson} from 'react-icons/bs';
import { IoNotificationsOutline } from "react-icons/io5";
import {FaTwitter , FaRegEnvelope} from 'react-icons/fa';
import {RiFileList2Line} from 'react-icons/ri';
import { Button } from "@material-ui/core";
import {CgMoreO} from 'react-icons/cg';
import SidebarProfileInf from './profileInf/SidebarProfileInf';
function SideBar() {
    return (
        <div className="sideBar">
            <FaTwitter className="twitterIcon"/>
            <SideBarOption Icon={AiFillHome} text="Home"/>
            <SideBarOption Icon={BsHash} text="Explore"/>
            <SideBarOption Icon={IoNotificationsOutline} text="Notification"/>
            <SideBarOption Icon={FaRegEnvelope} text="Messages"/>
            <SideBarOption Icon={BsBookmark} text="Bookmarks"/>
            <SideBarOption Icon={RiFileList2Line} text="Lists"/>
            <SideBarOption Icon={BsPerson} text="Profile"/>
            <SideBarOption Icon={CgMoreO} text="More"/>
            <div className="sidebarBtnContainer">   
                <Button variant="outlined" className="sidebarBtn">Tweet</Button>
            </div>
            <SidebarProfileInf src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg" name="alireza shafaee" username="alireza"/>
        </div>
    )
}

export default SideBar
