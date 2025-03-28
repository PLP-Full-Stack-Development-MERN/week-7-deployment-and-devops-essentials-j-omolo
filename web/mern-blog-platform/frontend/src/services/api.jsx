import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/blogs`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching blogs: ' + error.message);
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/blogs/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching blog: ' + error.message);
    }
};

export const createBlog = async (blogData) => {
    try {
        const response = await axios.post(`${API_URL}/blogs`, blogData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating blog: ' + error.message);
    }
};

export const updateBlog = async (id, blogData) => {
    try {
        const response = await axios.put(`${API_URL}/blogs/${id}`, blogData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating blog: ' + error.message);
    }
};

export const deleteBlog = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/blogs/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting blog: ' + error.message);
    }
};