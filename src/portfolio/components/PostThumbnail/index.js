import React from 'react';
import Link from 'next/link';

const stripHTML = html => html.replace(/(<([^>]+)>)/gi, "");

const PostThumbnail = ({data}) => {
    const {featuredImage} = data;
    const imgUrl = featuredImage?.node.sourceUrl;

    const postSnippet = stripHTML(data.content.slice(0, 250));
    const ellipsis = data.content.length > 250 && '...'; //TODO: should be postSnippet.length > ....
    
    const imgStyles = imgUrl && bckgStyles(imgUrl);
    
    return (
        <Link href={`/blog/posts/${data.slug}`}>
        <div className="post-thumb__container">
            <div className="post-thumb__img-container" style={imgStyles}/>
                {/* <img alt={`post-thumb-${data.title}`} src={featuredImage?.node.sourceUrl}/>
            </div> */}
            <h4 className="post-thumb__title">{data.title}</h4>
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