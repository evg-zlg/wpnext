import Image from 'next/image';
import { useEffect, useRef } from 'react';

import styles from './ton-page-wallet.module.scss';
import stylesReuse from '../ton-page-reuse.module.scss';

import borderImg from '../../../assets/images/phone-border.png';
import tonkeeperPreviewImg from '../../../assets/images/tonkeeper-preview.jpg';
import walletPreviewImg from '../../../assets/images/wallet-preview.jpg';
import linkArow from './icons/link-arrow-icon.svg';
import tonkeeperIcon from './icons/tonkeeper-icon.svg';
import walletIcon from './icons/wallet-icon.svg';

function TonPageWallet() {
  const leftVideo = useRef<HTMLVideoElement>(null);
  const rightVideo = useRef<HTMLVideoElement>(null);

  const playLeftVideo = () => {
    if (leftVideo.current) {
      leftVideo.current.play();
    }
  };
  const playRightVideo = () => {
    if (rightVideo.current) {
      rightVideo.current.play();
    }
  };

  useEffect(() => {
    playLeftVideo();
  }, []);

  return (
    <section className={styles.wallet}>
      <div className={stylesReuse.tonWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Получи кошелёк и присоединяйся к TON</h2>
          <a
            className={stylesReuse.link}
            href="https://ton.org/en/wallets"
            target="_blank"
            rel="noreferrer"
          >
            Все варианты
            <span className={stylesReuse.arrow} />
          </a>
        </div>

        <div className={styles.wallets}>
          <a
            href="https://tonkeeper.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            onMouseEnter={() => playLeftVideo()}
          >
            <Image
              className={styles.linkArrow}
              src={linkArow}
              alt="link arrow"
            />
            <div className={styles.nameCard}>
              <Image src={tonkeeperIcon} alt="tonkeeper icon" className={styles.icon} />
              <h3 className={styles.subtitle}>Tonkeeper</h3>
            </div>
            <p className={styles.boldDescript}>Экосистема TON всегда с тобой</p>
            <p className={styles.description}>
              Защити криптовалюту, NFT и получай доступ к приложениям TON с
              помощью Tonkeeper.
            </p>
            <div className={styles.phone}>
              <Image
                className={styles.borderImg}
                priority
                src={borderImg}
                alt="tonkeeper"
              />
              <Image
                className={styles.previewImg}
                priority
                src={tonkeeperPreviewImg}
                alt="tonkeeper"
              />
              <video
                ref={leftVideo}
                className={styles.video}
                playsInline
                preload="auto"
                muted
              >
                <source
                  src="../../static/assets/video/tonkeeper.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </a>
          <a
            href="https://tonkeeper.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            onMouseEnter={() => playRightVideo()}
          >
            <Image
              className={styles.linkArrow}
              src={linkArow}
              alt="link arrow"
            />
            <div className={styles.nameCard}>
              <Image src={walletIcon} alt="wallet icon" className={styles.icon} />
              <h3 className={styles.subtitle}>WALLET</h3>
            </div>
            <p className={styles.boldDescript}>
              Мгновенно переводи деньги в Telegram
            </p>
            <p className={styles.description}>
              Отправляй и получай деньги от любого пользователя Telegram за
              несколько кликов с помощью @wallet.
            </p>
            <div className={styles.phone}>
              <Image
                className={styles.borderImg}
                priority
                src={borderImg}
                alt="tonkeeper"
              />
              <Image
                className={styles.previewImg}
                priority
                src={walletPreviewImg}
                alt="tonkeeper"
              />
              <video
                ref={rightVideo}
                className={styles.video}
                playsInline
                preload="auto"
                muted
              >
                <source
                  src="../../static/assets/video/wallet.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export { TonPageWallet };
