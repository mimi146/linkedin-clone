import React from 'react';
import './Sidebar.css';
import {Avatar} from "@material-ui/core";


function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="" src />
                <Avatar className="sidebar_avatar"/>
                <h2>Milan Niroula</h2>
                <h4>Niroulamilan37@gmail.com</h4>
            </div>
            <div className="sidebar_stat">
            <p>Who view your profile</p>
                <p className="viewstat"></p>
                <p className="sidebar_statnumber">100</p>
            </div>
            <div className="sidebar_stat">
                <p>views of your post</p>
                <p className="sidebar_statnumber">1244</p>
            </div>

            <div className="sidebar_recent">
                <p>recent</p>
            </div>


        </div>
    )
}

export default Sidebar;