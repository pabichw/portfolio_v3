import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import Portfolio from '../portfolio/Portfolio';

function HomePage(props) {
    return (
        <Portfolio {...props} />
    )
}

const GET_POSTS_RECENT = gql`
    query GetPostsRecent {
        posts(first:3) {
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
    const {posts: {nodes: posts}} = await graphcms.request(GET_POSTS_RECENT)

    return {
        props: {
        postsData: {posts},
        },
    }
}


export default HomePage;