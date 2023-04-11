import styles from './home.module.scss';
import wrapStyles from '../styles/wrapper.module.scss';
import { GetStaticProps } from 'next';
import { getFavoriteBlogsForHome, getLatestBlogsForHome } from '../lib/api';

import BlogsFavorites from '../components/blogs-favorites/blogs-favorites';
import BlogsLatest from '../components/blogs-latest/blogs-latest';
import Telegram from '../components/telegram/telegram';

export default function MainPage({ latestBlogs: { edges }, favoriteBlogs }) {
  const heroFavoritePost = favoriteBlogs.nodes[0];
  const moreFavoritePosts = favoriteBlogs.nodes.slice(1);

  const heroLatestPost = edges[0].node;
  const moreLatestPosts = edges.slice(1);

  return (
    <>
      <div className={wrapStyles.wrapper}>
        <h1 className={styles.hiddenText}>wpnext</h1>
        <section className={styles.firstSection}>
          <BlogsFavorites
            heroPost={heroFavoritePost}
            morePosts={moreFavoritePosts}
          />
          <BlogsLatest heroPost={heroLatestPost} morePosts={moreLatestPosts} />
        </section>
      </div>
      <section className={styles.telegramSection}>
        <div className={wrapStyles.wrapper}>
          <Telegram />
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestBlogs = await getLatestBlogsForHome();
  const favoriteBlogs = await getFavoriteBlogsForHome();
  return {
    props: { latestBlogs, favoriteBlogs },
    revalidate: 10,
  };
};
