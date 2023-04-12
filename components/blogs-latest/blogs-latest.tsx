import Link from 'next/link';
import styles from './blogs-latest.module.scss';
import { getFormattedDate } from '../../lib/utils';

export default function BlogsLatest({ heroPost, morePosts }) {
  
  return (
    <ul className={styles.blogsLatest}>
      <li key={heroPost.id} className={styles.itemFirst}>
        <Link href={`/blog/${heroPost.slug}`} className={styles.link}>
          <article className={styles.infoFirst}>
            <p className={styles.tag}>[новости]</p>
            <p className={styles.title}>{heroPost.title}</p>
            <p className={styles.text}>{heroPost.text}</p>
          </article>
        </Link>
      </li>
      {morePosts.map(({ node }) => (
        <li key={node.slug} className={styles.item}>
          <Link href={`/blog/${node.slug}`} className={styles.link}>
            <article className={styles.info}>
              <p className={styles.title}>{node.title}</p>
              <p className={styles.text}>{getFormattedDate(node.date)}</p>
            </article>
          </Link>
        </li>
      ))}
      <li key={'some-uniq-key'} className={styles.itemLast}>
        <Link href={'/blog'} className={styles.allBlogs}>
          Все новости
        </Link>
      </li>
    </ul>
  );
}
