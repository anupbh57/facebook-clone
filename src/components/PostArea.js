import React from "react";
import "./PostArea.css";

import userIcon from "../usericon.png";
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';

export default function PostArea(){
    return(<div className="postarea">
        <div className="postarea__top">
            <img className="postarea__user_icon" src = {userIcon} alt ="user Icon"></img>
            <input type = "text" className="postarea__form" placeholder="What's on your mind, Anup?"></input>
        </div>
        <div className="postarea__bottom">
            <div className="postarea__action">
                <div className="postarea__ico_live"><VideoCallRoundedIcon/></div>
                <div>Live video</div>
            </div>

            <div className="postarea__action">
            <div className="postarea__ico_photo"><PhotoLibraryRoundedIcon/></div>
                <div>Photo/video</div>
            </div>

            <div className="postarea__action">
            <div className="postarea__ico_feeling"><MoodRoundedIcon/></div>
                <div>Feeling/activity</div>
            </div>
        </div>
    </div>)
}