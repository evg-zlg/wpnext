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
          className="text-4xl font-medium transition-opacity hover:opacity-80 "
        >
          wpnext
        </Link>

        <a
          href="https://github.com/evg-zlg/wpnext"
          className="text-4xl font-medium transition-opacity hover:opacity-80 "
          target="_blank"
          rel="noreferrer"
        >
          <Image priority src={gitHubIcon} alt="github wpnext" />
        </a>
      </header>
    </div>
  );
}
