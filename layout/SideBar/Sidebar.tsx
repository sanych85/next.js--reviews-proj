import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './P.module.css';
import cn from 'classnames';
export const Sidebar = ({

  children,

  ...props
}: SidebarProps) => {
  return (
   <div {...props}>
     Sidebar
   </div>
  );
};

export default Sidebar;
