import Link from 'next/link';
import gitHubIcon from '../../assets/icons/github.svg';
import Image from 'next/image';
import wrapStyles from '../../styles/wrapper.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={wrapStyles.wrapper}>
      <header className={styles.header}>
        <Link
          href="/"
          className={styles.logo}
        >
          wpnext
        </Link>

        <a
          href="https://github.com/evg-zlg/wpnext"
          target="_blank"
          rel="noreferrer"
        >
          <Image priority className={styles.icon} src={gitHubIcon} alt="github wpnext" />
        </a>
      </header>
    </div>
  );
}
