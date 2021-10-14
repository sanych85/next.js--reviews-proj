import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from "date-fns"
export const Footer = ({ className,...props }: FooterProps) => {
  return (
    <footer {...props} className = {cn(className, styles.footer)}>
      <div className = {styles.copyright}>OnTop @2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target = "_blank">Пользовательское соглашение</a>
      <a href="#" target = "_blank">Политика конфиденциальности</a>
     
    </footer>
  );
};

export default Footer;
