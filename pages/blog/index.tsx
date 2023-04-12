import Head from 'next/head';
import { GetStaticProps } from 'next';
import MoreStories from '../../components/old_components/more-stories';
import { getAllPostsForHome } from '../../lib/api';
import HeroPost from '../../components/old_components/hero-post';

export default function BlogList({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
      </Head>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
