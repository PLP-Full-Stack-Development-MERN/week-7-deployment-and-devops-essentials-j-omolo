import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogEditor = ({ match, history }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const blogId = match.params.id;

    useEffect(() => {
        if (blogId) {
            setIsEditing(true);
            axios.get(`/api/blogs/${blogId}`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                })
                .catch(error => {
                    console.error('Error fetching the blog post:', error);
                });
        }
    }, [blogId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = { title, content };

        if (isEditing) {
            axios.put(`/api/blogs/${blogId}`, blogData)
                .then(() => {
                    history.push('/');
                })
                .catch(error => {
                    console.error('Error updating the blog post:', error);
                });
        } else {
            axios.post('/api/blogs', blogData)
                .then(() => {
                    history.push('/');
                })
                .catch(error => {
                    console.error('Error creating the blog post:', error);
                });
        }
    };

    return (
        <div>
            <h2>{isEditing ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default BlogEditor;