import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import Header from './Header/Header';
import Sidebar from './SideBar/Sidebar';
import Footer from './Footer/Footer';
import React from 'react';
import { AppContextProvider, IAppContext } from '../context/app.context';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}></Header>

      <Sidebar className={styles.sidebar}></Sidebar>
      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  );
};
//testgi
export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: React.FC<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu = {props.menu} firstCategory  = {props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
      
    );
  };
};
