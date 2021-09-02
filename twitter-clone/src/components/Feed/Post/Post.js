import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ post,displayName, username, verified, text, image, avatar , likes , islike }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className={['postImage' , image ? '' : "dis"].join("")}>  
            <img src={image}  alt="" />
          </div>
          <div className="post__footer">
            <div> 
              <ChatBubbleOutlineIcon fontSize="small" />
            </div>
            <div>
              <RepeatIcon fontSize="small" />
            </div>
            <div className="likes">    
              {islike ? <FavoriteIcon className="heart" fontSize="small" /> :
               <FavoriteBorderIcon className="heart" fontSize="small" />}
             <p className="numberOfLikes"></p>
            </div>
            <div>
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;