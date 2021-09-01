import React from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import {WiStars} from 'react-icons/wi';
import Post from './Post/Post';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <WiStars className="wistars"/>
            </div>
            <Tweetbox/>
            <Post displayName="Cristiano Ronaldo" 
            username="Cristiano" 
            text="i want to have sex tonight with jorgina"
            avatar="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            verified
            image="https://pbs.twimg.com/media/E6LaZ7PXsAIss3M?format=jpg&name=medium"/>
        </div>
    )
}

export default Feed;
