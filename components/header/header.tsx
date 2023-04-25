import Link from 'next/link';
import gitHubIcon from '../../assets/icons/github.svg';
import Image from 'next/image';
import wrapStyles from '../../styles/wrapper.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={wrapStyles.wrapper}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            wpnext
          </Link>
          <nav className={styles.nav}>
            <Link href="/ton" className={styles.navItem}>
              Пример SSG
            </Link>
            <Link href="/blog" className={styles.navItem}>
              Блог
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
        </div>
      </div>
    </header>
  );
}
