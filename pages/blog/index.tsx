import Head from 'next/head';
import { GetStaticProps } from 'next';
import MoreStories from '../../components/old_components/more-stories';
import { getAllPosts } from '../../lib/api';
import HeroPost from '../../components/old_components/hero-post';
import PostList from '../../components/post-list/post-list';

export default function BlogList({ allPosts: { nodes } }) {
  console.log(nodes);

  const heroPost = nodes[0];
  const morePosts = nodes.slice(1);

  return (
    <>
      <Head>
        <title>{`wpnext | blog`}</title>
      </Head>
      <PostList posts={nodes}/>
      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.featuredImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
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
