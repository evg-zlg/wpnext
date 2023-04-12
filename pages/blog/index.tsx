import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/api';
import PostList from '../../components/post-list/post-list';

export default function BlogList({ allPosts: { nodes } }) {
  return (
    <>
      <Head>
        <title>{`wpnext | blog`}</title>
      </Head>
      <PostList posts={nodes} />
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
