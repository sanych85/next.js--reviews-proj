import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './P.module.css';
import cn from 'classnames';
export const Header = ({

  ...props
}: HeaderProps) => {
  return (
   <header {...props}>
      header

   </header>
  );
};

export default Header;
