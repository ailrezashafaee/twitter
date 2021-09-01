import React , {useState} from 'react';
import './Tweetbox.css';
import { Avatar, Button } from "@material-ui/core";
function Tweetbox() {
    const[tweetMessage , setTweetMessage] = useState("");
    const[tweetImage , setTweetImage] = useState("");


    return (
        <form className="tweetbox">
            <div className="tweetbox__input">
                <Avatar  style={{height:'50px' , width:'50px'}} src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg" />
                <input value={tweetMessage}
                onChange = { (e) => setTweetMessage(e.target.value) }
                type="text" placeholder="What's happening?"/>
            </div>
            <div className="tweetbox__footer">
                <input value={tweetImage}
                onChange = { (e) => setTweetImage(e.target.value) }
                type="text" placeholder="Optional : Enter the link of pic/gif"/>
                <Button>Tweet</Button>
            </div>

        </form>
    )
}

export default Tweetbox;
