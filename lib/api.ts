import { WORDPRESS_API_URL } from "./constants";

const API_URL = process.env.WORDPRESS_API_URL || WORDPRESS_API_URL;

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function get11PostsForBlog(count: number, cursor: string | null) {
  const data = await fetchAPI(`
    query postsForBlog {
      posts(first: ${count}, after: "${cursor}") {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return data
}

export async function getPostsByCategory(category: string | string[]) {
  const data = await fetchAPI(
    `
    query FavoriteBlogs {
      posts( where: {categoryName: "${category}"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}

export async function getPostsDevelopment() {
  const data = await fetchAPI(
    `
    query FavoriteBlogs {
      posts( where: {categoryName: "development"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
                node {
                  sourceUrl
                }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}
export async function getPostsPlagins() {
  const data = await fetchAPI(
    `
    query PlaginsBlogs {
      posts( where: {categoryName: "plaginyi-wordpress"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
                node {
                  sourceUrl
                }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}
export async function getPostsCases() {
  const data = await fetchAPI(
    `
    query PlaginsBlogs {
      posts( where: {categoryName: "cases"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
                node {
                  sourceUrl
                }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}

export async function getFavoriteBlogsForHome() {
  const data = await fetchAPI(
    `
    query FavoriteBlogs {
      posts(first: 4, where: {categoryName: "favorites"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
                node {
                  sourceUrl
                }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}
export async function getLatestBlogsForHome() {
  const data = await fetchAPI(
    `
    query LatestBlogs {
      posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
    `
  );
  return data?.posts;
}

export async function getPost(slug: string | string[]) {
  const data = await fetchAPI(
    `fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug{
      post(id: "${slug}", idType: SLUG) {
        ...PostFields
        content
      }
      posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
                node {
                  sourceUrl
                }
          }
        }
      }
    }
  `
  );
  return data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 1000) {
        nodes {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `
  );

  return data?.posts;
}