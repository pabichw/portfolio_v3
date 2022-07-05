import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Menu from '../../../portfolio/components/MenuBar';

const IMAGE_PROVIDER = `https://strapi-pcxo.onrender.com`

export default function Post({ post }) {
  const imgUrl = `${IMAGE_PROVIDER}${post.attributes.featuredImage?.data.attributes.url}`;
  
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
          <h2 className="article__title">{post.attributes.title}</h2>
          <section className="article__content" dangerouslySetInnerHTML={{__html: post.attributes.content}}/>
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

const GET_POST_BY_ID = (id) => gql`
  query { 
    blogPost(id: ${id}) {
      data {
        id
        attributes {
          title
          content
          featuredImage {
            data {
              attributes {
                url
              }
            }
          } 
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const graphcms = new GraphQLClient('https://strapi-pcxo.onrender.com/graphql');
  const { blogPost: { data: blogPost } } = await graphcms.request(GET_POST_BY_ID(params.slug))

  return {
    props: {
      post: blogPost
    },
  }
}

const GET_POSTS = gql`
  query { 
    blogPosts(filters: {}, pagination: {}, sort: [], publicationState: LIVE) {
      data {
        id
      }
    }
  }
`;

export async function getStaticPaths() {
  const graphcms = new GraphQLClient('https://strapi-pcxo.onrender.com/graphql');
  const { blogPosts: { data: posts } } = await graphcms.request(GET_POSTS)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.id,
        },
      }
    }),
    fallback: false,
  }
}