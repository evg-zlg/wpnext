import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts, getAllPostsWithSlug } from '../../lib/api';
import PostList from '../../components/post-list/post-list';

export default function AllBlogList({ allPosts: { nodes } }) {
  const title = 'Все посты';
  const description = 'Статьи, обзоры и другие полезные материалы мира Wordpress и WooCommerce';

  return (
    <>
      <Head>
        <title>{`wpnext | ${title}`}</title>
      </Head>
      <PostList posts={nodes} title={title} description={description}/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();
  
  return {
    props: { allPosts },
    revalidate: 10,
  };
};