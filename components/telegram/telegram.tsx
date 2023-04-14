import Image from 'next/image';
import styles from './telegram.module.scss';

export default function Telegram() {
  return (
    <div className={styles.telegram}>
      <div className={styles.call}>
        <h2 className={styles.title}>Подписывайтесь на наш канал в Telegram</h2>
        <a
          className={styles.subscribe}
          href="https://t.me/wpcraft"
          rel="noreferrer noopener"
          target="_blank"
        >
          Подписаться
        </a>
      </div>
      <a className={styles.link} href="https://t.me/wpcraft" rel="noreferrer noopener" target="_blank">
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            alt="telegram"
            src={
              'https://wpcraft.ru/wp-content/uploads/2023/04/wordpress-woocommerce-telegram.png'
            }
          />
        </div>
      </a>
    </div>
  );
}
