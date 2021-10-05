import React from 'react';
import { ParagraphProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';
export const P = ({
  size = 'm',
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === 's',//если в сайзе передаем s , то применим из наших styles.s
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}>
      {children}
    </p>
  );
};

export default P;
