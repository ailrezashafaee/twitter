import React, { useState, useEffect } from "react";
import './Feed.css';
import db from "../../firebase";
import Tweetbox from './Tweetbox'
import {WiStars} from 'react-icons/wi';

import Post from './Post/Post';
import FlipMove from "react-flip-move";
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <WiStars className="wistars"/>
            </div>
            <Tweetbox/>
            <FlipMove>
                {posts.sort((a , b)=>{return b.date - a.date}).map((post) => (
                    <Post
                    key={post.date}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    likes={post.likes}
                />
                ))}
            </FlipMove>  
        </div>
    )
}

export default Feed;
