import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import wrapStyles from '../../styles/wrapper.module.scss';
import styles from './header.module.scss';

import gitHubIcon from '../../assets/icons/github.svg';

export default function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const translateXto0 = {
    transform: 'translateX(0)',
  };

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  const openBurgerMenu = () => {
    setShowBurgerMenu(true);
  };

  return (
    <header className={styles.header}>
      <div className={wrapStyles.wrapper}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            wpnext
          </Link>
          <div
            onClick={() => closeBurgerMenu()}
            className={styles.shadowZone}
            style={
              showBurgerMenu
                ? { display: 'block', opacity: 1, width: '100%' }
                : {}
            }
          />
          <nav
            className={styles.nav}
            style={showBurgerMenu ? translateXto0 : {}}
          >
            <Link
              href="/blog/category/favorites"
              className={styles.navItem}
              onClick={() => closeBurgerMenu()}
            >
              Избранное
            </Link>
            <Link
              href="/blog/category/development"
              className={styles.navItem}
              onClick={() => closeBurgerMenu()}
            >
              Разработка
            </Link>
            <Link
              href="/blog/category/plaginyi-wordpress"
              className={styles.navItem}
              onClick={() => closeBurgerMenu()}
            >
              Плагины
            </Link>
            <Link
              href="/blog/category/cases"
              className={styles.navItem}
              onClick={() => closeBurgerMenu()}
            >
              Кейсы
            </Link>
            <Link
              href="/ton"
              className={styles.navItem}
              onClick={() => closeBurgerMenu()}
            >
              TON
            </Link>
            <Link
              href="/blog"
              className={styles.navItem}
              onClick={() => closeBurgerMenu()}
            >
              Все посты
            </Link>
          </nav>

          <a
            href="https://github.com/evg-zlg/wpnext"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              priority
              className={styles.icon}
              src={gitHubIcon}
              alt="github wpnext"
            />
          </a>
          {!showBurgerMenu && (
            <button
              type="button"
              className={styles.burgerIconOpen}
              onClick={() => openBurgerMenu()}
            />
          )}
          {showBurgerMenu && (
            <button
              type="button"
              className={styles.burgerIconClose}
              onClick={() => closeBurgerMenu()}
            />
          )}
        </div>
      </div>
    </header>
  );
}
