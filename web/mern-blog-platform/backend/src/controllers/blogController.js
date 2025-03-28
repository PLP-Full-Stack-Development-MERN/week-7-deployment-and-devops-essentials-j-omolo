const Blog = require('../models/blogModel');

// Get all blog posts
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error });
    }
};

// Create a new blog post
exports.createBlog = async (req, res) => {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author });

    try {
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ message: 'Error creating blog', error });
    }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content, author }, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: 'Error updating blog', error });
    }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error });
    }
};