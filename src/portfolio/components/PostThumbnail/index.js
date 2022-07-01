import React from 'react';
import Link from 'next/link';

const stripHTML = html => html.replace(/(<([^>]+)>)/gi, "");

const PostThumbnail = ({ data }) => {
    const { id, attributes: { content, featuredImage, title } } = data;
    const imgUrl = featuredImage?.node.sourceUrl;

    const postSnippet = stripHTML(content.slice(0, 250));
    const ellipsis = content.length > 250 && '...'; // TODO: should be postSnippet.length > ....
    
    const imgStyles = imgUrl && bckgStyles(imgUrl);
    
    return (
        <Link href={`/blog/posts/${id}`}>
        <div className="post-thumb__container">
            <div className="post-thumb__img-container" style={imgStyles}/>
            <h4 className="post-thumb__title">{title}</h4>
            <p className="post-thumb__snippet">{postSnippet}{ellipsis}</p>
        </div>
        </Link>
    );
};

const bckgStyles = url => ({
    'background': `url(${url})`, 
    'background-size': 'cover',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
})

export default PostThumbnail;