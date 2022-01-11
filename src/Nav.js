import React from 'react';
import "./Nav.css";
import logo from "./icon.png";
import userLogo from "./usericon.png";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import DialpadIcon from '@mui/icons-material/Dialpad';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Nav() {
    return (
        <div className="nav">
            <div className='nav__left'>
                <img src={logo}
                    className='logo' alt = "Main Logo"></img>
                <Input id="input-with-icon-adornment" placeholder='Search facebook'
                    startAdornment={
                        <InputAdornment
                    position="start" ><SearchIcon/></InputAdornment>
                    }/>
            </div>
            <div className='nav__middle'>
                <div className='nav__ico active'><HomeOutlinedIcon/></div>
                <div className='nav__ico'><TvOutlinedIcon/></div>
                <div className='nav__ico'><StorefrontIcon/></div>
                <div className='nav__ico'><GroupsIcon/></div>
                <div className='nav__ico'><SportsEsportsIcon/></div>
            </div>
            <div className='nav__right'>
                <div className='nav__user'>
                    <img src={userLogo} alt = "user Logo"
                        className='user_logo user__logo'></img>
                    <span>Anup</span>
                </div>
                <div className='nav__control_ico'>
                    <DialpadIcon/>
                    <ChatBubbleIcon/>
                    <NotificationsIcon/>
                    <ArrowDropDownIcon/>
                </div>
            </div>
        </div>
    )
}
