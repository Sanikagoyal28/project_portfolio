import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEye, faBars, faTimes, faMemo, faTrophy, faBriefcase, faT } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: 'Home',
    path: '#home',
    icon: faHouse,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '#about',
    icon: faUser,
    cName: 'nav-text'
  },
  {
    title: 'Work Experience',
    path: '#work',
    icon: faBriefcase,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '#project',
    icon: faEye,
    cName: 'nav-text'
  },
  {
    title: 'Publications',
    path: '#publication',
    icon: faBriefcase,
    cName: 'nav-text'
  },
  {
    title: 'Achievements',
    path: '#achievement',
    icon: faTrophy,
    cName: 'nav-text'
  }
];