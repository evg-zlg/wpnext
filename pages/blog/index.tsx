import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './blog.module.scss';
import stylesWrap from '../../styles/wrapper.module.scss';

import { get11PostsForBlog } from '../../lib/api';
import PostList from '../../components/post-list/post-list';

export default function AllBlogList({ data }) {
  const [cursor, setCursor] = useState(data.posts.pageInfo.endCursor);
  const [posts, setPosts] = useState(data.posts.nodes);

  const title = 'Все посты';
  const description =
    'Статьи, обзоры и другие полезные материалы мира Wordpress и WooCommerce';

  const showMoreHandle = async () => {
    const newData = await get11PostsForBlog(10, cursor);
    setCursor(newData.posts.pageInfo.endCursor);
    setPosts([...posts, ...newData.posts.nodes]);
  };

  return (
    <>
      <Head>
        <title>{`wpnext | ${title}`}</title>
      </Head>
      <PostList posts={posts} title={title} description={description} />
      <button
        type="button"
        className={styles.showMore}
        onClick={showMoreHandle}
      >
        Показать ещё
      </button>
    </>
  );
}

export const getServerSideProps: GetStaticProps = async () => {
  const data = await get11PostsForBlog(21, null);

  return {
    props: { data },
  };
};
