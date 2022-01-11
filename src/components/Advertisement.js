import React from "react";
import "./Advertisement.css";
import GroupIcon from "../groupsIcon.png"

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AdLogo from "../images/fb-005.jpeg"

export default function Advertisement() {
    return (
        <div className="ad__card">
            <div className="card__top">
                <div className="card__top_left">
                    <img className="card__logo"
                        src={GroupIcon}
                        alt="group logo"></img>
                        <p className="card__des card__des_t">Groups</p>
                    <p className="card__des">Suggested for you</p>
                </div>

                <CloseOutlinedIcon/>
            </div>
            <div className="card__main">
                <img src={AdLogo}
                    className="card__img"
                    alt="advertised group logo"></img>
            </div>
            <div className="ad__footer">
                <h3 className="group__name">AMD Careers ANZ</h3>
                <p className="group__info">30k+ members</p>
            </div>
            <button className="ad__action_button">Join group</button>
        </div>
    )
}
