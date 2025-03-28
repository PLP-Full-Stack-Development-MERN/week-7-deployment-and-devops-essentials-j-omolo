import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import { fetchBlogs } from '../services/api';

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs();
                setBlogs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getBlogs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Personal Blog</h1>
            <BlogList blogs={blogs} />
        </div>
    );
};

export default HomePage;