import React from "react";
import "./PostArea.css";

import userIcon from "../usericon.png"
export default function PostArea(){
    return(<div className="postarea">
        <div className="postarea__top">
            <img className="postarea__user_icon" src = {userIcon} alt ="user Icon"></img>
            <input type = "text" className="postarea__form" placeholder="What's on your mind, Anup?"></input>
        </div>
    </div>)
}