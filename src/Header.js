import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import logo1 from './img/174857.png';
import { Divider } from '@material-ui/core';
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import Chat from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default function Header() {
    return (
        <div className='Header'>

            <div className='Header_left'>
                <img src={logo1} alt="" />

                
            <div className='Header_search'>
                <SearchIcon />
                <input type="text" placeholder="search" />
            </div>
            </div>

            <div className='Header_right'>
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="Home" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />


            </div>
        </div>
    )
}
