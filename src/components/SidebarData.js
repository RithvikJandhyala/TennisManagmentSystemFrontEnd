import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import * as B from 'react-icons/md';
import * as GiIcons from 'react-icons/gi'
;

export const SidebarData = [
  {
    title: 'Matches',
    path: '/',
    icon: <B.MdSportsTennis/>,
    cName: 'nav-text'
  },
  {
    title: 'Players',
    path: '/players',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Courts',
    path: '/courts',
    icon: <GiIcons.GiTennisCourt />,
    cName: 'nav-text'
  },
 
];
