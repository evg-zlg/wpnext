import Card from '../card/card';
import styles from './tags-item.module.scss';

export default function TagsItem({ title, posts, count }) {
  return (
    <div className={styles.tagsItem}>
      <h2 className={styles.title}>
        {title}
        <span className={styles.count}>{count}</span>
      </h2>
      <div className={styles.items}>
        {posts.map((post) => (
          <div className={styles.cardWrapper} key={post.slug}>
            <Card blog={post} tag={title}/>
          </div>
        ))}
      </div>
    </div>
  );
}
