import React from "react";
import "./Friends.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
var statusColor = null;
export default function Friends(props) {
    props.status === "online" ? statusColor = "green" : statusColor = "#d18b8b"
    return (
        <div className="friends__card">
            
            <div className="friends__card_img">
                <img className="friends__card_icon"
                    src={
                        props.pic
                    }
                    alt="user icon"></img>
                <div className="friends__card__status"><FiberManualRecordIcon sx = {{color: statusColor}}/></div>
            </div>

            <div className="friends__card_name">
                {
                props.name
            }</div>
        </div>
    )
}
