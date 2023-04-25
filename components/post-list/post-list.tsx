import styles from './post-list.module.scss';
import styleWrapper from '../../styles/wrapper.module.scss';
import CardHero from '../card-hero/card-hero';
import Card from '../card/card';

export default function PostList({ posts, title, description }) {
  const postHero = posts[0];
  const anotherPosts = posts.slice(1);

  return (
    <div className={styleWrapper.wrapper}>
      <ul className={styles.grid}>
        <li className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.count}>{posts.length}</p>
          <p className={styles.description}>{description}</p>
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
    </div>
  );
}
