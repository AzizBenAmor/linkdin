import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
  

  const dispatch=useDispatch();
  const logoutOfApp = ()=>{
    dispatch(logout())
    auth.signout();
  };
  return (
    <div className="header">


      <div className='header__left'>
      <img src="/images/linkdin.png" alt="" />
    <div className="header__search">
        <SearchIcon/>
        <input placeholder='Search' type="text" />
    </div>
      </div>
    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={ChatIcon} title="messaging"/>
      <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
      <HeaderOption avatar={true} title="me" onClick={logoutOfApp}
/>
      
      
    </div>
        </div>
  )
}

export default Header
