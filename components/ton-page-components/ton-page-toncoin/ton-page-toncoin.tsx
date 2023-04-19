import styles from './ton-page-toncoin.module.scss';
import stylesReuse from '../ton-page-reuse.module.scss';

function TonPageToncoin() {
  return (
    <section className={styles.toncoin}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            {`Toncoin: будущее
             валюты`}
          </h2>
          <p className={styles.description}>
            Он используется для комиссий за транзакции, защиты блокчейна
            посредством ставок, принятия решений о развитии сети и расчетов по
            платежам.
          </p>
          <div className={styles.links}>
            <a
              className={stylesReuse.link}
              href="https://ton.org/en/toncoin#toncoin-purchase"
              target="_blank"
              rel="noreferrer"
            >
              Получить Toncoin
              <span className={stylesReuse.arrow} />
            </a>
            <a
              className={stylesReuse.link}
              href="https://ton.org/en/toncoin#toncoin-use-cases"
              target="_blank"
              rel="noreferrer"
            >
              Примеры использования
              <span className={stylesReuse.arrow} />
            </a>
            <a
              className={stylesReuse.link}
              href="https://ton.org/bridge"
              target="_blank"
              rel="noreferrer"
            >
              Бридж
              <span className={stylesReuse.arrow} />
            </a>
          </div>
        </div>
        <div className={styles.imgWrapp}>
          <img
            className={styles.img}
            src="./static/assets/images/toncoin-coins.png"
            alt="coins"
          />
        </div>
      </div>
    </section>
  );
}

export { TonPageToncoin };
