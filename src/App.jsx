import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogListDb from './components/BlogListDb';
import { fetchBlogs, deleteBlog } from './api';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError('Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const deleteBlogForId = async (id) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (err) {
      setError('Failed to delete blog.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <Navbar />
      <BlogListDb blogs={blogs} deleteBlogForId={deleteBlogForId} title={"All blogs from API"} />
      <Footer />
    </div>
  );
}

export default App;


// import Navbar from './Navbar';
// import Footer from './Footer';
// import Blog from './Blog';
// import Events from './Events';
// import StateHook from './StateHook';
// import UseEffectHook from './UseEffectHook';
// import BlogsDB from './BlogsDB';
// import BlogList from './BlogList';
// import BlogListDb from './bloglist/BlogListDb';

// import { useState, useEffect } from 'react';

// function App() {
//   // const blog = { "id": 1, "title": "Blog Title", "content": "Blog Content", author: "Author Name" };

//   // 1. Create a blogs object using useState
//   // 2. Pass this variable to BlogList Component
//   // 3. render BlogList component in the App component
//   const [blogs, setBlogs] = useState([]);

//   function deleteBlogForId(id){
//     // Q: Create a new array and delete the elem with id,
//     // and set the new array to the state
//     const newArray = blogs.filter( blog => blog.id !== id);
//     setBlogs(newArray);
//   }
  

//   return (
//     <div className="App">
//       <Navbar />
//       {/* <Blog blog={blog} title={"Title-01"}/> */}
//       {/* <Events/> */}
//       {/* <StateHook /> */}
//       {/* <UseEffectHook /> */}

//       {/* Q: Send blogs only when id is even */}
//       {/* <BlogList blogs={blogs} deleteBlogForId={deleteBlogForId} title={"Even Blogs"}/> */}
//       {/* <BlogList blogs={blogs} deleteBlogForId={deleteBlogForId} title={"Odd Blogs"}/> */}
      
//       <BlogListDb blogs={blogs} title={"All blogs from API"} />



//       <Footer />
//     </div>
//   );
// }

// export default App;
