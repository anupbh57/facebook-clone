import React from "react";
import "./SidebarLeft.css";
import userLogo from "./usericon.png";

import PeopleIcon from './peopleIcon.png';
import BookmarkIcon from './bookmarkIcon.png';
import GroupsIcon from './groupsIcon.png';
import StorefrontIcon from './storefrontIcon.png';
import TvIcon from './tvIcon.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import shortcut1 from "./images/fb-001.png";
import shortcut2 from "./images/fb-002.jpeg"
import shortcut3 from "./images/fb-003.jpeg"
import shortcut4 from "./images/fb-004.png"


export default function SidebarLeft() {
    return (
        <div className="sidebar__left">
            <ul className="s__list li__top">
                <li className="sl__item">
                    <span className="li__ico ">
                        <img src={userLogo}
                            className='sidebar__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Anup Bhandari</span>
                </li>
                <li className="sl__item ">
                    <span className="li__ico ico__friends">
                        <img src={PeopleIcon}
                            className='sidebar__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Friends</span>
                </li>
                <li className="sl__item ico__bookmark">
                    <span className="li__ico">
                        <img src={BookmarkIcon}
                            className='sidebar__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Profile</span>
                </li>
                <li className="sl__item">
                    <span className="li__ico ico__groups">
                        <img src={GroupsIcon}
                            className='sidebar__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Groups</span>
                </li>
                <li className="sl__item">
                    <span className="li__ico ico__marketplace">
                        <img src={StorefrontIcon}
                            className='sidebar__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Marketplace</span>
                </li>
                <li className="sl__item">
                    <span className="li__ico ico__watch">
                        <img src={TvIcon}
                            className='sidebar__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Watch</span>
                </li>
                <li className="sl__item">
                    <span className="li__ico ico__arrow"><KeyboardArrowDownIcon/></span>
                    <span className="li__item">See More</span>
                </li>
            </ul>

            <h3 className = "sidebar__left_title">Your Shortcuts</h3>

            <ul className="s__list">
                <li className="sl__item">
                    <span className="li__ico ">
                        <img src={shortcut1}
                            className='sc__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">AMD Hardware Enthusiasts</span>
                </li>
                <li className="sl__item ">
                    <span className="li__ico ico__friends">
                        <img src={shortcut2}
                            className='sc__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">PC Master Race</span>
                </li>
                <li className="sl__item">
                    <span className="li__ico ico__groups">
                        <img src={shortcut4}
                            className='sc__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">Groups</span>
                </li>
                <li className="sl__item ico__bookmark">
                    <span className="li__ico">
                        <img src={shortcut3}
                            className='sc__logo'
                            alt="user Logo"></img>
                    </span>
                    <span className="li__item">7NEWS: Covonavirus National Update LIVE</span>
                </li>
                
                
            </ul>
        </div>
    )
}
