import React, { useEffect, useState } from 'react';
import { getBlogs, deleteBlog } from '../services/api';

const AdminPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await getBlogs();
            setBlogs(response.data);
        };
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        await deleteBlog(id);
        setBlogs(blogs.filter(blog => blog._id !== id));
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <h2>Manage Blog Posts</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <h3>{blog.title}</h3>
                        <button onClick={() => handleDelete(blog._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;