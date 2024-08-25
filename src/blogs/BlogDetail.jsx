import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id:_id } = useParams();
  console.log(_id)

  // 1. use useParams() to extract the id from the URL
  // 2. display the id in the h2 tag
  // 3. Create the API endpoint to fetch the blog with the id using customHook useFetch
  // 4. Fetch the blog data using custom hook useFetch
  // 5. Display the blog data in the BlogDetail component

  // // Add support for deleting a blog
  // 6. Create a delete button
  // 7. Add an onClick event to the delete button
  // 8. Create a handleDelete function to handle the delete event
  // 9. Using fetch, make a DELETE request to the API with the blog id
  // 10. Log a message to the console when the blog is deleted
  // 11. Navigate back to the blogs page after the blog is deleted

  const url =`http://localhost:4000/api/blogs/${_id}`
  const { data, loading, error } = useFetch(url);
  const navigate=useNavigate()
  function handleDelete() {
    fetch(url, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Blog deleted");
          navigate("/blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <section>
      {loading && <p>The page is loading</p>}

      {error && 
     
      <p>{error.message}</p>}
      {data && (
        <div>
          <h4>{data.title}</h4>
          <em>Written by: {data.author}</em>
          <p>{data.content}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
       
    </section>
    
  );
};

export default BlogDetail;

/*
import { useNavigate } from 'react-router-dom';
    
const navigate = useNavigate();


const handleDelete = () => {
    fetch(url, {
        method: 'DELETE'
    }).then(() => {
        console.log('Blog deleted');
        navigate("/blogs");
    })
    .catch((err) => {
        console.log(err);
    });
}


<button onClick={handleDelete}>Delete</button>

*/
