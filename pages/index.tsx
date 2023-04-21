import styles from './home.module.scss';
import wrapStyles from '../styles/wrapper.module.scss';
import { GetStaticProps } from 'next';
import {
  getFavoriteBlogsForHome,
  getLatestBlogsForHome,
  getPostsCases,
  getPostsDevelopment,
  getPostsPlagins,
} from '../lib/api';

import BlogsFavorites from '../components/blogs-favorites/blogs-favorites';
import BlogsLatest from '../components/blogs-latest/blogs-latest';
import Telegram from '../components/telegram/telegram';
import BlogsGroupByTags from '../components/blogs-goup-by-tags/blogs-goup-by-tags';

export default function MainPage({
  latestBlogs: { edges },
  favoriteBlogs,
  blogsGrouped,
}) {
  const heroFavoritePost = favoriteBlogs.nodes[0];
  const moreFavoritePosts = favoriteBlogs.nodes.slice(1);

  const heroLatestPost = edges[0].node;
  const moreLatestPosts = edges.slice(1);

  console.log(favoriteBlogs)

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
      <section className={styles.tagsSection}>
        <div className={wrapStyles.wrapper}>
          <BlogsGroupByTags groupedBlogs={blogsGrouped} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestBlogs = await getLatestBlogsForHome();
  const favoriteBlogs = await getFavoriteBlogsForHome();
  const postsFromDevelopment = await getPostsDevelopment();
  const postsFromPlagins = await getPostsPlagins();
  const postsFromCases = await getPostsCases();
  const blogsGrouped = [];

  blogsGrouped.push({
    title: 'Разработка',
    count: postsFromDevelopment.nodes.length,
    posts: [...postsFromDevelopment.nodes?.slice(0, 5)],
  });
  blogsGrouped.push({
    title: 'Плагины',
    count: postsFromPlagins.nodes.length,
    posts: [...postsFromPlagins.nodes.slice(0, 5)],
  });
  blogsGrouped.push({
    title: 'Кейсы',
    count: postsFromCases.nodes.length,
    posts: [...postsFromCases.nodes.slice(0, 5)],
  });

  return {
    props: { latestBlogs, favoriteBlogs, blogsGrouped },
    revalidate: 10,
  };
};
