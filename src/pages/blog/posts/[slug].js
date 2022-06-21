import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Menu from '../../../portfolio/components/MenuBar';

export default function Post({ post }) {
  console.log('post', post)
  const imgUrl = post.featuredImage?.node.sourceUrl;
  
  const imgStyles = imgUrl && bckgStyles(imgUrl);

  return (
    <>
      <Menu alwaysStick/>
      <div className="post-container">
        <div className="breadcrumb">
          <Link href="/blog">{'<< Back'}</Link>
        </div>
        <article className="post-container__article">
          <div className="article__featured-image-wrapper" style={imgStyles}/>
            {/* <img alt={`featured ${post.featuredImage?.node.sourceUrl}`} src={post.featuredImage?.node.sourceUrl}/>
          </div> */}
          <h2 className="article__title">{post.title}</h2>
          <section className="article__content" dangerouslySetInnerHTML={{__html: post.content}}/>
        </article>
      </div>
    </>
  )
}

const bckgStyles = url => ({
  'background': `url(${url})`, 
  'background-size': 'cover',
  'background-position': 'center',
  'background-repeat': 'no-repeat',
})

const GET_POST_BY_SLUG = slug => gql`
  query GetPostsBySlug {
    postBy(slug: \"${slug}\") {
      title
      content
      featuredImage  {
        node {
            id
            sourceUrl
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const graphcms = new GraphQLClient('http://panel.pabich.cc/graphql');
  const {postBy} = await graphcms.request(GET_POST_BY_SLUG(params.slug))

  return {
    props: {
      post: postBy
    },
  }
}

const GET_POSTS_SLUGS_ALL = gql`
  query GetPostsSlugsAll {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export async function getStaticPaths() {
  const graphcms = new GraphQLClient('http://panel.pabich.cc/graphql');
  const {posts: {nodes: posts}} = await graphcms.request(GET_POSTS_SLUGS_ALL)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}