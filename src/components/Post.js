import React, {useEffect, useState} from "react";
import "./Post.css";
import * as firebase from "firebase/app"
import db from "../FirebaseImport";

import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

var pImage = null;
export default function Post(props) {
    props.postimg ? pImage = "post__img" : pImage = "post__img_nodisplay";
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header_left">
                    <img className="post__poster_icon"
                        src={
                            props.img
                        }
                        alt="poster icon"></img>
                    <div className="post__poster_info">
                        <div className="post__poster_name">
                            {
                            props.name
                        }</div>
                        <div className="post__poster_time">{props.date}
                            <span>
                                &nbsp; ·
                            </span>
                            <span className="post_poster_privacy"><PublicRoundedIcon/></span>
                        </div>
                    </div>
                </div>
                <div className="post__header_right"><MoreHorizRoundedIcon/></div>
            </div>
            <div className="post__content">
                <div className="post__text">
                    {props.text}
                </div>
                <img className={pImage}
                    src={
                        props.postimg
                    }/>
            </div>
            <div className="post__stats">
                <div className="post__stats_left">
                    <RecommendIcon/>
                    <span>{
                        props.likes
                    }</span>
                </div>
                <div className="post__stats_right">
                    <span>{
                        props.comments
                    }
                        &nbsp;Comments</span>
                    <span class = "post__stats_commentspan">{
                        props.shares
                    }
                        &nbsp;Shares</span>
                </div>
            </div>
            <div className="post__bottom">
                <div className="post__action">
                    <div className="post__ico_like"><ThumbUpOutlinedIcon/></div>
                    <div>Like</div>
                </div>

                <div className="post__action">
                    <div className="post__ico_comment"><ChatBubbleOutlineIcon/></div>
                    <div>Comment</div>
                </div>

                <div className="post__action">
                    <div className="post__ico_share"><ReplyOutlinedIcon/></div>
                    <div>Share</div>
                </div>

                <div className="post__usericon">
                    <img className="post__usericon_ico" src = {props.loggedinuser} alt = "user pic"></img>
                    <ArrowDropDownOutlinedIcon/>
                </div>
            </div>
            <div className="post__util"></div>
        </div>
    )
}
