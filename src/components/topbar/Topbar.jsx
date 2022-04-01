import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="tobbarWrapper">
        <div className="topLeft">
          <span className='logo'>My Admin</span>
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
          <img src="https://api-private.atlassian.com/users/8f525203adb5093c5954b43a5b6420c2/avatar" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
