import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEye, faBars, faTimes, faMemo, faTrophy, faBriefcase, faT } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
     
        <div className='navbar'>
        
            <FontAwesomeIcon icon={faBars} onClick={showSidebar} className='menu-bars' />
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <a href='#' className='menu-bars1'>
              <FontAwesomeIcon icon={faTimes}/>
              </a>
            </li>
            <ul >
            {SidebarData.map((item, index) => {
              return (
                <> 
                <li key={index} >
                  <a href={item.path} className='center' >
                  <FontAwesomeIcon icon={item.icon} className={item.cName}/>
                    <p>{item.title}</p>
                  </a>
                </li>
                </>);
            })} </ul>
          </ul>
        </nav>
        <nav className='sidebar'>
          <ul className='nav-menu-items' onClick={showSidebar}>
            
            <ul >
            {SidebarData.map((item, index) => {
              return (
                <> 
                <li key={index} >
                  <a href={item.path} className='center' >
                  <FontAwesomeIcon icon={item.icon} className={item.cName}/>
                    <p>{item.title}</p>
                  </a>
                </li>
                </>);
            })} </ul>
          </ul>
        </nav>
    </>
  );
}

export default Sidebar;
