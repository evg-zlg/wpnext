import Image from 'next/image';

import styles from './ton-page-community.module.scss';
import stylesReuse from '../ton-page-reuse.module.scss';

import telegramIcon from './icons/telegram-icon.svg';
import twitterIcon from './icons/twitter-icon.svg';


function TonPageCommunity() {
  return (
    <section className={styles.community}>
      <div className={stylesReuse.tonWrapper}>
        <div className={styles.inner}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              TON сообщество.
              <span className={styles.titleColored}>Только хорошее</span>
            </h2>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://t.me/toncoin"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <Image className={styles.icon} src={telegramIcon} alt="telegram icon" />
              Telegram
            </a>
            <a
              href="https://twitter.com/ton_blockchain"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <Image className={styles.icon} src={twitterIcon} alt="twitter icon" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TonPageCommunity };
