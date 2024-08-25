import axios from 'axios';

// Define the base URL for your API
const API_URL = 'http://localhost:4000/api/blogs';

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Create a new blog
export const createBlog = async (blog) => {
  try {
    const response = await axios.post(API_URL, blog);
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// Update a blog by ID
export const updateBlog = async (id, updatedBlog) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedBlog);
    return  response.data;
} catch (error) {
  console.error('Error updating blog:', error);
  throw error;
}
};
