import React from 'react';
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
                {allPostsData?.posts?.map(post => <PostThumbnail key={`${post.attributes.title}-thumb`} data={post}/>)}
            </section>
        </main>
    </>
  )
}

const GET_POSTS = gql`
    query { 
        blogPosts(filters: {}, pagination: {}, sort: [], publicationState: LIVE) {
            data {
                id
                attributes {
                    content
                    title
                }
            }
        }
    }
`;
export async function getStaticProps() {
    const graphcms = new GraphQLClient('https://pabich-panel.lm.r.appspot.com/graphql');
    const { blogPosts: { data: posts } } = await graphcms.request(GET_POSTS)

    return {
        props: {
            allPostsData: { posts },
        },
    }
}