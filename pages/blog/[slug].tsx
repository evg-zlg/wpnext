import styles from './slug.module.scss';
import stylesWrap from '../../styles/wrapper.module.scss';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import PostHeader from '../../components/post-header/post-header';
import { getAllPostsWithSlug, getPost } from '../../lib/api';
import TagsItem from '../../components/tags-item/tags-item';
import { getFormattedDate } from '../../lib/utils';

export default function Post({ post, posts }) {
  const router = useRouter();
  const morePosts = posts?.nodes;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>{`${post.title}`}</title>
            <meta
              property="og:image"
              content={post.featuredImage?.node.sourceUrl}
            />
          </Head>
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={getFormattedDate(post.date)}
            />
            <div className={stylesWrap.postWrapper}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          <div className={stylesWrap.wrapper}>
            <div className={styles.morePosts}>
              {morePosts.length > 0 && (
                <TagsItem
                  count={0}
                  title={'Ещё почитать'}
                  posts={morePosts}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const data = await getPost(params?.slug);

  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};
