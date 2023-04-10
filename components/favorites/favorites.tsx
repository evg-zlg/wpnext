import styles from './favorites.module.scss';
import CardHero from '../card-hero/card-hero';
import Card from '../card/card';

export default function Favorites({ blogs }) {
  return (
    <>
      <h2 className={styles.hideTitle}>Свежие материалы</h2>
      <div className={styles.cardsGrid}>
        {blogs.map((blog, i) => {
          if (i === 0) {
            return <CardHero blog={blog}/>
          }
          return <Card blog={blog} />;
        })}
      </div>
    </>
  );
}
