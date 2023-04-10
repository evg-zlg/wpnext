import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import { getAllPostsForHome } from '../../lib/api';

export default function BlogList({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
        {/* <title>{`Next.js Blog Example with ${CMS_NAME}`}</title> */}
      </Head>
      <Container>
        {/* <Intro /> */}
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
      </Container>
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
