import Image from 'next/image';

import styles from './ton-page-distribution.module.scss';
import stylesReuse from '../ton-page-reuse.module.scss';

import transactionsIcon from './icons/transactions-icon.svg';
import accountsIcon from './icons/accounts-icon.svg';
import validatorsIcon from './icons/validators-icon.svg';

function TonPageDistribution() {
  return (
    <section className={styles.distribution}>
      <div className={stylesReuse.tonWrapper}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            {`Множество участников.
              Массовое распространение`}
          </h2>
          <p className={styles.description}>
            {`TON масштабируемый и разделяемый. Гибкая архитектура позволяет ему расти и расти без потери производительности.`}
          </p>
        </div>

        <div className={styles.counters}>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Транзакции</h3>
            <p className={styles.count}>124,401,889</p>
            <Image
              alt="transactions"
              src={transactionsIcon}
              className={styles.bgIcon}
            />
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Участники</h3>
            <p className={styles.count}>2,507,790</p>
            <Image
              alt="accounts"
              src={accountsIcon}
              className={styles.bgIcon}
            />
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Валидаторы</h3>
            <p className={styles.count}>301</p>
            <Image
              alt="validators"
              src={validatorsIcon}
              className={styles.bgIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { TonPageDistribution };
