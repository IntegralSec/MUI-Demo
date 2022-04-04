import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Outlet, Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">
              Dashboard
            </h3>
            <ul className="sidebarList">
              <li className="sidebarListItem"><Link to="/" className="link"><LineStyleIcon className="sidebarIcon" />Home</Link></li>
              <li className="sidebarListItem"><TimelineIcon className="sidebarIcon" />Analytics</li>
              <li className="sidebarListItem"><TrendingUpIcon className="sidebarIcon" />Sales</li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">
              Quick Menu
            </h3>
            <ul className="sidebarList">
            <li className="sidebarListItem"><GroupsIcon className="sidebarIcon" /><Link to="/users" className="link">Users</Link></li>
              <li className="sidebarListItem"><TimelineIcon className="sidebarIcon" />Analytics</li>
              <li className="sidebarListItem"><TrendingUpIcon className="sidebarIcon" />Sales</li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">
              Teams
            </h3>
            <ul className="sidebarList">
              <li className="sidebarListItem"><ManageAccountsIcon className="sidebarIcon" />Product</li>
              <li className="sidebarListItem"><MonetizationOnIcon className="sidebarIcon" />Sales</li>
              <li className="sidebarListItem"><StorefrontIcon className="sidebarIcon" />Marketing</li>
              <li className="sidebarListItem"><PrecisionManufacturingIcon className="sidebarIcon" />Tech</li>
              <li className="sidebarListItem"><TrendingUpIcon className="sidebarIcon" />Investors</li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">
              Staff
            </h3>
            <ul className="sidebarList">
              <li className="sidebarListItem"><GroupsIcon className="sidebarIcon" />Team</li>
              <li className="sidebarListItem"><ViewKanbanIcon className="sidebarIcon" />Kanban</li>
              <li className="sidebarListItem"><CalendarMonthIcon className="sidebarIcon" />Meetings</li>
            </ul>
          </div>

        </div>
    </div>
  )
}
