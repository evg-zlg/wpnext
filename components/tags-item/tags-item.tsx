import Link from 'next/link';
import Card from '../card/card';
import styles from './tags-item.module.scss';

export default function TagsItem({ title, posts, count }) {
  let category = '';

  switch (title.toLocaleLowerCase()) {
    case 'разработка':
      category = 'development'
      break;
    case 'плагины':
      category = 'plaginyi-wordpress'
      break;
    case 'кейсы':
      category = 'cases'
      break;
  
    default:
      break;
  } 

  return (
    <div className={styles.tagsItem}>
      <h2 className={styles.title}>
        <Link href={`/blog/category/${category}`}>{title}</Link>
        <span className={styles.count}>{count > 0 ? count : ''}</span>
      </h2>
      <div className={styles.items}>
        {posts.map((post) => (
          <div className={styles.cardWrapper} key={post.slug}>
            <Card blog={post} key={post.slug} tag={title} />
          </div>
        ))}
      </div>
    </div>
  );
}
