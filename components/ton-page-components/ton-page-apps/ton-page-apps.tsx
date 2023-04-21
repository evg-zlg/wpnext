import styles from './ton-page-apps.module.scss';
import stylreReuse from '../ton-page-reuse.module.scss';
import Image from 'next/image';

import linkArow from './icons/link-arrow-icon.svg';
import mobileIcon from './icons/mobile-icon.svg';
import borderImg from '../../../assets/images/phone-border.png';
import toneMobileImg from '../../../assets/images/ton_mobile.png';

function TonPageApps() {
  return (
    <section className={styles.apps}>
      <div className={stylreReuse.tonWrapper}>
        <div className={styles.grid}>
          <a
            href="https://tonmobile.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.cardOne}
          >
            <Image
              className={styles.linkArrow}
              src={linkArow}
              alt="link arrow"
            />
            <div className={styles.nameCard}>
              <Image
                src={mobileIcon}
                alt="mobile icon"
                className={styles.icon}
              />
              <h3 className={styles.subtitle}>Tonkeeper</h3>
            </div>
            <p className={styles.boldDescript}>Экосистема TON всегда с тобой</p>
            <p className={styles.description}>
              Защити криптовалюту, NFT и получай доступ к приложениям TON с
              помощью Tonkeeper.
            </p>
            <Image
              className={styles.img}
              priority
              src={toneMobileImg}
              alt="tonkeeper"
            />
          </a>
          <a
            href="https://tonmobile.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.cardOne}
          >
            <Image
              className={styles.linkArrow}
              src={linkArow}
              alt="link arrow"
            />
            <div className={styles.nameCard}>
              <Image
                src={mobileIcon}
                alt="mobile icon"
                className={styles.icon}
              />
              <h3 className={styles.subtitle}>Tonkeeper</h3>
            </div>
            <p className={styles.boldDescript}>Экосистема TON всегда с тобой</p>
            <p className={styles.description}>
              Защити криптовалюту, NFT и получай доступ к приложениям TON с
              помощью Tonkeeper.
            </p>
            <Image
              className={styles.img}
              priority
              src={toneMobileImg}
              alt="tonkeeper"
            />
          </a>
          <a
            href="https://tonmobile.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.cardOne}
          >
            <Image
              className={styles.linkArrow}
              src={linkArow}
              alt="link arrow"
            />
            <div className={styles.nameCard}>
              <Image
                src={mobileIcon}
                alt="mobile icon"
                className={styles.icon}
              />
              <h3 className={styles.subtitle}>Tonkeeper</h3>
            </div>
            <p className={styles.boldDescript}>Экосистема TON всегда с тобой</p>
            <p className={styles.description}>
              Защити криптовалюту, NFT и получай доступ к приложениям TON с
              помощью Tonkeeper.
            </p>
            <Image
              className={styles.img}
              priority
              src={toneMobileImg}
              alt="tonkeeper"
            />
          </a>
          <a
            href="https://tonmobile.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.cardOne}
          >
            <Image
              className={styles.linkArrow}
              src={linkArow}
              alt="link arrow"
            />
            <div className={styles.nameCard}>
              <Image
                src={mobileIcon}
                alt="mobile icon"
                className={styles.icon}
              />
              <h3 className={styles.subtitle}>Tonkeeper</h3>
            </div>
            <p className={styles.boldDescript}>Экосистема TON всегда с тобой</p>
            <p className={styles.description}>
              Защити криптовалюту, NFT и получай доступ к приложениям TON с
              помощью Tonkeeper.
            </p>
            <Image
              className={styles.img}
              priority
              src={toneMobileImg}
              alt="tonkeeper"
            />
          </a>
          <a href="" className={styles.card}></a>
          <a href="" className={styles.card}></a>
          <a href="" className={styles.card}></a>
          <a href="" className={styles.card}></a>
          <a href="" className={styles.card}></a>
        </div>
      </div>
    </section>
  );
}

export { TonPageApps };
