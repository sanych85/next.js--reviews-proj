import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './P.module.css';
import cn from 'classnames';
import Menu from '../Menu/Menu';
export const Sidebar = ({

  children,

  ...props
}: SidebarProps) => {
  return (
   <div {...props}>
     <Menu></Menu> 
   </div>
  );
};

export default Sidebar;
