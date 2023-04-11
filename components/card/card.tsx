import styles from './card.module.scss';
import Image from 'next/image';
import TagOnCard from '../tag-on-card/tag-on-card';
import Link from 'next/link';

export default function Card({ blog }) {
  return (
    <article key={blog.id} className={styles.card}>
      <Link href={'/'} className={styles.link}>
        <TagOnCard tag={'обзоры'} />
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            fill
            priority
            src={blog.featuredImage.node.sourceUrl}
            alt="image blog"
          />
        </div>
        <div className={styles.titleAndDate}>
          <h3 className={styles.title}>
            {blog.title}
          </h3>
          <p className={styles.date}>
            {blog.date}
          </p>
        </div>
      </Link>
    </article>
  );
}