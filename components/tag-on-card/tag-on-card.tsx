import styles from './tag-on-card.module.scss';

export default function TagOnCard({ tag }) {
  return (
    <div className={styles.tag}>
      <p className={styles.text}>{`[${tag}]`}</p>
    </div>
  );
}
