import styles from './home.module.scss';
import wrapStyles from '../styles/wrapper.module.css';
import { GetStaticProps } from 'next';
import { getLatestBlogsForHome } from '../lib/api';

import BlogsFavorites from '../components/blogs-favorites/blogs-favorites';
import BlogsLatest from '../components/blogs-latest/blogs-latest';

export default function MainPage({ blogs: { edges } }) {
  const heroPost = edges[0].node;
  const morePosts = edges.slice(1);

  return (
    <div className={wrapStyles.wrapper}>
      <h1 className={styles.hiddenText}>wpnext</h1>
      <section className={styles.firstSection}>
        <BlogsFavorites heroPost={heroPost} morePosts={morePosts} />
        <BlogsLatest heroPost={heroPost} morePosts={morePosts} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getLatestBlogsForHome();
  
  return {
    props: { blogs },
    revalidate: 10,
  };
};
