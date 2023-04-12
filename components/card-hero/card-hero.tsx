import styles from './card-hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import TagOnCard from '../tag-on-card/tag-on-card';
import { getFormattedDate } from '../../lib/utils';

export default function CardHero({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className={styles.cardLink}>
      <article className={styles.heroCard}>
        <TagOnCard tag="избранное" />
        <span className={styles.imgWrapper}>
          <Image
            fill
            priority
            className={styles.img}
            src={blog.featuredImage.node.sourceUrl}
            alt="image blog"
          />
        </span>

        <div className={styles.titleAndDate}>
          <h3 className={styles.title}>{blog.title}</h3>
          <p className="text-white text-xs tracking-[-0.2px]">{getFormattedDate(blog.date)}</p>
        </div>
      </article>
    </Link>
  );
}
