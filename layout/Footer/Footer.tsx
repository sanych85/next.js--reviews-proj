import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './P.module.css';
import cn from 'classnames';
export const Footer = ({



  ...props
}: FooterProps) => {
  return (
   <footer {...props}>
      
        footer
   </footer>
  );
};

export default Footer;
