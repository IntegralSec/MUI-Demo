import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from './default-avatar.png'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="tobbarWrapper">
        <div className="topLeft">
          <span className='logo'>Node JS Demo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">
              2
            </span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />

          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
