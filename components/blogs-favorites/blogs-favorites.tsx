import styles from './blogs-favorites.module.scss';
import CardHero from '../card-hero/card-hero';
import Card from '../card/card';

export default function BlogsFavorites({ heroPost, morePosts }) {
  return (
    <>
      <h2 className={styles.hideTitle}>Свежие материалы</h2>
      <div className={styles.cardsGrid}>
        <CardHero blog={heroPost} />
        {morePosts.map((post) => (
          <div key={post.slug} className={styles.cardWrapper}>
            <Card blog={post} />
          </div>
        ))}
      </div>
    </>
  );
}
