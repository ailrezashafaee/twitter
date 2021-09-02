import React , {useState} from 'react';
import './Tweetbox.css';
import db from "../../firebase";
import { Avatar, Button } from "@material-ui/core";
function Tweetbox() {
    const[tweetMessage , setTweetMessage] = useState("");
    const[tweetImage , setTweetImage] = useState("");
const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Cristiano Ronaldo",
      username: "Cristiano",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg",
      date : new Date().getTime() / 1000
    });

    setTweetMessage("");
    setTweetImage("");
  };
const enterKeyHandler = (e)=>{
    if (e.charCode === 13) {
        sendTweet(e);
    }
}
    return (
        <form className="tweetbox">
            <div className="tweetbox__input">
                <Avatar  style={{height:'50px' , width:'50px'}} src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg" />
                <input value={tweetMessage}
                onChange = { (e) => setTweetMessage(e.target.value) }
                onKeyPress={enterKeyHandler}
                type="text" placeholder="What's happening?"/>
            </div>
            <div className="tweetbox__footer">
                <input value={tweetImage}
                onChange = { (e) => setTweetImage(e.target.value)}
                type="text" placeholder="Optional : Enter the link of pic/gif"/>
                <Button  onClick={sendTweet}>Tweet</Button>
            </div>
        </form>
    )
}   

export default Tweetbox;
