import styles from './post-list.module.scss';
import styleWrapper from '../../styles/wrapper.module.scss';
import CardHero from '../card-hero/card-hero';
import Card from '../card/card';

export default function PostList({ posts }) {
  const postHero = posts[0];
  const anotherPosts = posts.slice(1);

  return (
    <div className={styleWrapper.wrapper}>
      <ul className={styles.grid}>
        <li className={styles.info}>
          <h1 className={styles.title}>Заголовок</h1>
          <p className={styles.count}>3423</p>
          <p className={styles.description}>
            Описание того, что представлено в этом разделе
          </p>
        </li>
        <li className={styles.cardHeroWrap}>
          <CardHero blog={postHero} />
        </li>
        {anotherPosts.map((post) => (
          <li className={styles.cardWrap} key={post.slug}>
            <Card blog={post} tag={'пост'} />
          </li>
        ))}
      </ul>
      <button type="button" className={styles.showMore}>Показать ещё</button>
    </div>
  );
}
