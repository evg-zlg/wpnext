import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './blog.module.scss';

import { get11PostsForBlog } from '../../lib/api';
import PostList from '../../components/post-list/post-list';
import { useInView } from 'react-intersection-observer';
import { Loader } from '../../components/loader/loader';

export default function AllBlogList({ data }) {
  const { ref, inView } = useInView();

  const [cursor, setCursor] = useState(data.posts.pageInfo.endCursor);
  const [posts, setPosts] = useState(data.posts.nodes);
  const [loading, setLoading] = useState(false);

  const title = 'Все посты';
  const description =
    'Статьи, обзоры и другие полезные материалы мира Wordpress и WooCommerce';

  const showMoreHandle = async () => {
    setLoading(true);
    const newData = await get11PostsForBlog(10, cursor);
    setCursor(newData.posts.pageInfo.endCursor);
    setPosts([...posts, ...newData.posts.nodes]);
    setLoading(false);
  };

  useEffect(() => {
    if (inView) {
      showMoreHandle();
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>{`wpnext | ${title}`}</title>
      </Head>
      <PostList posts={posts} title={title} description={description} />
      {loading && <Loader />}
      <div ref={ref} className={styles.endOfPage}/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await get11PostsForBlog(21, null);

  return {
    props: { data },
    revalidate: 60,
  };
};
