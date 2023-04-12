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
          <h1 className={styles.title}>Новости</h1>
          <p className={styles.count}>{posts.length}</p>
          <p className={styles.description}>
            Подборка интересных статей, обзоров и других полезных материалов 
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
      {/* <button type="button" className={styles.showMore}>Показать ещё</button> */}
    </div>
  );
}
