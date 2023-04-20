import styles from './ton-page-apps.module.scss';
import stylreReuse from '../ton-page-reuse.module.scss';

function TonPageApps() {
  return (
    <section className={styles.apps}>
      <div className={stylreReuse.tonWrapper}>
        <div className={styles.grid}>
          <a href="" className={styles.card}></a>
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

export {TonPageApps}