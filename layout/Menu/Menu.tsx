import React, { useContext } from 'react';

import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../Interfaces/menuInterface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../Interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Сервисы',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Сервисы',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const buildFirstLevel = () => {
    return (
      <>
      
        {firstLevelMenu.map((m) => {
          return (
            <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
          )

        })}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className = {styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlock]: m.isOpened,
              })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      
        pages.map((p, i) => (
          <a key = {i} href={`/${route}/${p.alias}`} className ={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:false
          })}>
            {p.category}
          </a>
        ))
      
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
