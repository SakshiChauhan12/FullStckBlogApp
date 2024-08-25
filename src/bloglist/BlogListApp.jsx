import Navbar from '../Navbar';
import Footer from '../Footer';
import BlogListDb from './BlogListDb';

import { useState, useEffect } from 'react';

function BlogListApp() {

  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Initialize the blogs state with null, as data to come from DB
  // 2. Fetch data from API using useEffect
  // 3. Set the blogs state with the fetched data
  // 4. Add setTimeout to simulate the delay in fetching data
  // 5. Add loading state to show loading message while fetching data
  // 6. Error Handling: Add error state to show error message if data fetching fails
  // 7. Error Handling: Handle 404 errors
  // HW: 8. Add a button to fetch data from API

  const url = "http://localhost:4000/api/blogs";
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((data) => {
          console.log("fetch is successful");
          // console.log(data);
          if(data.ok){
            // fetch is success, and data is fetched
            return data.json();
          }
          else{
            // fetch is success but data is not fetched
            throw Error("Data is not fetched from the API");
          }
        })
        .then((blogs) => {
          console.log("json parsin is successful");
          setBlogs(blogs);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err);
          setLoading(false);
        })
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <section>
        This is a section for BlogListApp.
      </section> */}
      {loading && <section>The page is loading</section>}
      {error && <section>{error.message}</section>}
      {blogs && <BlogListDb blogs={blogs} title={"All blogs from API"} />}

      <Footer />
    </div>
  );
}

export default BlogListApp;

















/*

useEffect(() => {
    setTimeout(() => {
      fetch(endPoint)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

*/