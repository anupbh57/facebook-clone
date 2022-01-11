import React from "react";
import "./SidebarRight.css";
import Advertisement from "./components/Advertisement";
import Friends from "./components/Friends";

import user1 from './images/profile/001.jpeg';
import user2 from './images/profile/002.jpeg';
import user3 from './images/profile/003.jpeg';
import user4 from './images/profile/004.jpeg';
import user5 from './images/profile/005.jpeg';
import user6 from './images/profile/006.jpeg';
import user7 from './images/profile/007.jpeg';
import user8 from './images/profile/008.jpeg';
import user9 from './images/profile/009.jpeg';
import user10 from './images/profile/010.jpeg';
import user11 from './images/profile/011.jpeg';
import user12 from './images/profile/012.jpeg';
import user13 from './images/profile/013.jpeg';
import user14 from './images/profile/014.jpeg';
import user15 from './images/profile/015.jpeg';
import user16 from './images/profile/016.jpeg';


export default function SidebarRight() {
    return (
        <div className="sidebar__right">
            <div className="sidebar__right_ad">
                <Advertisement/>
                <div className="contacts">
                    <h3 className="contacts__title">Contacts</h3>
                </div>
                <Friends name = "Melinda Roach" pic = {user2} status = "online"/>
                <Friends name = "Steve Dodson" pic = {user1} status = "online"/>
                <Friends name = "Nathan O'Connor" pic = {user3} status = "online"/>
                <Friends name = "Kathryn Rich" pic = {user4} status = "offline"/>
                <Friends name = "Belinda Young" pic = {user5} status = "online"/>
                <Friends name = "Marisa Lucas" pic = {user6} status = "offline"/>
                <Friends name = "Beatrice Nguyen" pic = {user7} status = "online"/>
                <Friends name = "Chuck Mason" pic = {user8} status = "online"/>
                <Friends name = "Emily Welsh" pic = {user9} status = "offline"/>
                <Friends name = "Nichole Willard" pic = {user10} status = "offline"/>
                <Friends name = "Bernadette Barton" pic = {user11} status = "online"/>
                <Friends name = "Adam Pierson" pic = {user12} status = "online"/>
                <Friends name = "Rebekah Dalton" pic = {user13} status = "offline"/>
                <Friends name = "Christine John" pic = {user14} status = "offline"/>
                <Friends name = "Nick Adkins" pic = {user15} status = "online"/>
                <Friends name = "Vickie Pearson" pic = {user16} status = "online"/>
            </div>
        </div>
    )
}
