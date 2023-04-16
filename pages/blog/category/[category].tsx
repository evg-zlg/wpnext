import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostsByCategory } from '../../../lib/api';
import PostList from '../../../components/post-list/post-list';

export default function BlogListCategory({ posts }) {
  const router = useRouter();
  let title = '';
  let description = '';

  switch (router.query.category) {
    case 'development':
      title = 'Разработка';
      description = `
        Разработка различных проектов, сайтов, веб-приложений, 
        плагинов, тем и шаблонов с использованием платформ WordPress и WooCommerce 
      `;
      break;
    case 'plaginyi-wordpress':
      title = 'Плагины';
      description = `
        Плагины и модулия WordPress для расширения сайтов.
        Обзоры, ссылки, инструкции.
      `;
      break;
    case 'cases':
      title = 'Кейсы';
      description = `Описание кейсов и историй разработки проектов на базе WordPress & WooCommerce`;
      break;

    default:
      title = 'Упс...';
      description = 'Что-то пошло не так';
      break;
  }

  return (
    <>
      {router.isReady && (
        <PostList posts={posts.nodes} title={title} description={description} />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsByCategory(params?.category);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ['development', 'plaginyi-wordpress', 'cases'];

  return {
    paths: categories.map((cat) => `/blog/category/${cat}`) || [],
    fallback: true,
  };
};
