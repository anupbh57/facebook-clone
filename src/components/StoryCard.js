import React from "react";
import "./StoryCard.css"
import AddIcon from '@mui/icons-material/Add';

export default function StoryCard(props) {
    return(<div className="story__card">
        <img className="story__img" src = {props.img} alt = "user icon"></img>
        <div className = "story__content">
            <img className="story__user_img" src = {props.profileP} alt = "profile pic"></img>
            <p className="story__user_name">{props.name}</p>
        </div>
    </div>)
}

export function AddStory(props) {
    return(<div className="story__card addstory__card">
    <img className="addstory__img" src = {props.img} alt = "user icon"></img>
    <div className = "addstory__content">
        <div className="addstory__icon"><AddIcon/></div>
        <p className="addstory__text">Create Story</p>
    </div>
</div>)
}