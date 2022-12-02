import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './SideBar.css'

function SideBar() {
  const user =useSelector(selectUser);
  const recentItem=(topic)=>  (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
    <div  className="sidebar__top">
      <img src="/images/aa.webp" alt=""/>
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
          </Avatar>
        <h2>{user.displayName}</h2>
        <h4> {user.email}</h4>
        </div>
        <div className="sidebar__stats">
        <div className="sidebar__stat">
             <p>Who viewed you</p>
             <p className="sidebar__statNumber">2,698</p>
        </div>
        <div className="sidebar__stat">
        <p>Views on post</p>
             <p className="sidebar__statNumber">2,220</p>
        </div>
        </div>
       <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('developer')}
        {recentItem('personnel trainer')}
        {recentItem('app developer')}

       </div>
    </div>
  )
}

export default SideBar
