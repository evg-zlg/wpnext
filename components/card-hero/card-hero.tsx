import styles from './card-hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import TagOnCard from '../tag-on-card/tag-on-card';

export default function CardHero({ blog }) {
  return (
    <Link href={'/'} className={styles.cardLink}>
      <article key={blog.id} className={styles.heroCard}>
        <TagOnCard tag="обзоры" />
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
          <p className="text-white text-xs tracking-[-0.2px]">{blog.date}</p>
        </div>
      </article>
    </Link>
  );
}
