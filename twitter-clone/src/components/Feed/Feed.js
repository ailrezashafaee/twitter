import React from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import {WiStars} from 'react-icons/wi';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <WiStars className="wistars"/>
            </div>
            <Tweetbox/>

        </div>
    )
}

export default Feed;
