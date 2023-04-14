import styles from './ton-page-welcome.module.scss';
import stylesWrapper from '../../../styles/wrapper.module.scss';

function TonPageWelcome() {
  return (
    <section className={styles.welcom}>
      <div className={stylesWrapper.tonWrapper}>
        <div className={styles.content}>
          <div className={styles.infoWrapp}>
            <h1 className={styles.title}>
              Добро пожаловать в
              <span className={styles.titleColored}>The Open Network</span>
            </h1>
            <p
              className={styles.description}
            >{`TON — это полностью децентрализованный layer-1 блокчейн, 
              разработанный Telegram для миллиардов пользователей. 
              Он может похвастаться сверхбыстрыми транзакциями, небольшими комиссиями, 
              простыми в использовании приложениями и экологичностью.`}</p>
            <div className={styles.buttons}>
              <a
                href="https://ton.org/en/community"
                target="_blank"
                rel="noreferrer"
                className={styles.btnJoin}
              >
                Присоединиться
              </a>
              <a
                href="https://ton.org/en/dev"
                target="_blank"
                rel="noreferrer"
                className={styles.btnStart}
              >
                Начать производство
              </a>
            </div>
          </div>

          <div className={styles.videoWrapp}>
            <video
              className={styles.video}
              width={400}
              height={400}
              autoPlay
              loop
              playsInline
              preload="auto"
              muted
            >
              <source
                src={'../../static/assets/video/dimond.webm'}
                type="video/webm"
              />
            </video>
            <div className={styles.dimondBg}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TonPageWelcome };
