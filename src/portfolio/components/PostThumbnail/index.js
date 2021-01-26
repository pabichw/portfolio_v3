import React from 'react';
import Link from 'next/link';
import './index.scss';

const stripHTML = html => html.replace(/(<([^>]+)>)/gi, "");

const PostThumbnail = ({data}) => {
    const {featuredImage} = data;

    const postSnippet = stripHTML(data.content.slice(0, 250));
    const ellipsis = data.content.length > 250 && '...'; //TODO: should be postSnippet.length > ....
    console.log('data', data);
    return (
        <Link href={`/blog/posts/${data.slug}`}>
        <div className="post-thumb__container">
            <div className="post-thumb__img-container" style={{background: `url(${featuredImage?.node.sourceUrl})`}}/>
                {/* <img alt={`post-thumb-${data.title}`} src={featuredImage?.node.sourceUrl}/>
            </div> */}
            <h4 className="post-thumb__title">{data.title}</h4>
            <p className="post-thumb__snippet">{postSnippet}{ellipsis}</p>
        </div>
        </Link>
    );
};

export default PostThumbnail;