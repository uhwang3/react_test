import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleft'>
          <span className='logo'>Uijeong</span>
        </div>
        <div className='topright'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img src="http://static.news.zumst.com/images/37/2020/04/12/d82ec5e045d14e2c96ea6d0b35f5a523.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
