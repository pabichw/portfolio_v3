import React from 'react';
import '../../styles/blog/index.scss';
import { GraphQLClient, gql } from 'graphql-request';
import PostThumbnail from 'src/portfolio/components/PostThumbnail';
import MenuBar from '../../portfolio/components/MenuBar'

export default function Blog({ allPostsData }) {
  return (
      <>
        <MenuBar alwaysStick={true}/>
        <main className="blog-container">
            <h2>Blog</h2>
            <section className="blog-container__posts-grid">
                {allPostsData?.posts?.map(post => <PostThumbnail data={post}/>)}
            </section>
        </main>
    </>
  )
}

const GET_POSTS_ALL = gql`
    query GetPostsRecent {
        posts {
        nodes {
            title
            uri
            content
            slug
            featuredImage  {
                node {
                    id
                    sourceUrl
                }
            }
        }
    }
}
`;

export async function getStaticProps() {
    const graphcms = new GraphQLClient('http://panel.pabich.cc/graphql');
    const {posts: {nodes: posts}} = await graphcms.request(GET_POSTS_ALL)

    return {
        props: {
            allPostsData: {posts},
        },
    }
}