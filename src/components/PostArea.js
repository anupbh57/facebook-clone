import React from "react";
import "./PostArea.css";

import userIcon from "../usericon.png";
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';

import db from "../FirebaseImport";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var text, image = null;

export default function PostArea(){
    const postSubmit = (e) => {
        e.preventDefault();

        var text = document.getElementById("postarea_text").value;
        var image = document.getElementById("postarea_img").value;

        db.collection('1').add({
            postImg: image,
            postText: text,
            postedtime: firebase.firestore.FieldValue.serverTimestamp(),
            posterImg: "https://firebasestorage.googleapis.com/v0/b/facebook-clone-9021a.appspot.com/o/usericon.png?alt=media&token=24e3ac32-a0bf-49ff-8fde-0b4a42b63b61",
            postid: Math.floor(Math.random() * 1000) + 1,
            posterName: "Anup Bhandari",
            comments: Math.floor(Math.random() * 100) + 1,
            likes: Math.floor(Math.random() * 1000) + 1,
            shares: Math.floor(Math.random() * 50) + 1,
        })
    }
    
  

    return(<div className="postarea">
        <div className="postarea__top">
            <form>
            <img className="postarea__user_icon" src = {userIcon} alt ="user Icon"></img>
            <input type = "text" className="postarea__form" placeholder="What's on your mind, Anup?" id = "postarea_text"></input>
            <input type = "text" className="postarea__form_img" placeholder="Image url" id = "postarea_img"></input>
            <button onClick={postSubmit} type="submit"className="postarea__button">hidden</button>
            </form>
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