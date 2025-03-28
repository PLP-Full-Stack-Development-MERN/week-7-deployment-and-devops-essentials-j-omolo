import React from 'react';

const BlogPost = ({ post }) => {
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-post">
            <h1>{post.title}</h1>
            <p>By {post.author}</p>
            <div className="content">
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;