import React from 'react'
import './Widget.css'
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterMomentShare
  } from "react-twitter-embed";

function Widget() {
    return (
        <div className="widget">
            <div className='widget__top'>
                <SearchIcon className="widget__searchicon"/>
                <input className="widget__input" type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widget__container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1432251744508014592"}/>

            </div>
            <div className="widget__container2">
                <div>
                    <TwitterTimelineEmbed className="hi2"
                        sourceType="profile"
                        screenName="Cristiano"
                        options={{height: 400}}
                    />
                </div>

            </div>

        </div>
    )
}

export default Widget
