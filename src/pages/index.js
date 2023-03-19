import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import Portfolio from '../portfolio/Portfolio';

function HomePage(props) {
  return (
    <Portfolio {...props} />
  )
}

const GET_POSTS_RECENT = gql`
    query { 
        blogPosts(filters: {}, pagination: { pageSize: 3 }, sort: [], publicationState: LIVE) {
            data {
                id
                attributes {
                    title, 
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

export async function getStaticProps() {
  // const graphcms = new GraphQLClient('https://strapi-pcxo.onrender.com/graphql');
  // const { blogPosts: { data: posts } } = await graphcms.request(GET_POSTS_RECENT)

  // return {
  //     props: {
  //         postsData: { posts },
  //     },
  // }
  return ({ props: {} })
}


export default HomePage;
