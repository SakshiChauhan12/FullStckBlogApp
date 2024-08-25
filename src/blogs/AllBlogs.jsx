import useFetch from "./useFetch";
import Blogs from "./Blogs";

const AllBlogs = () => {

    console.log('MyComponent rendered');
    const url = "http://localhost:4000/api/blogs";

    const {data, loading, error} = useFetch(url);

    // 1. create a custom hook useFetch, such that we can reuse it later for calling different APIs
    // 2. useFetch() will take the url as an argument
    // 3. useFetch() will return data, loading, and error
    // 4. setup the cleanup function for useFetch() to abort the fetch request
    // 5. setup the abortController to abort the fetch request
    // 6. Handle the AbortError in the catch block

    return (
        <div>
            {loading && <section>The page is loading</section>}
            {error && <section>{error.message}</section>}
            {data && <Blogs blogs={data} title={"Blogs from AllBlogs (via fetch api)"} />}
        </div>
    );
}

export default AllBlogs;















/*

const { data: blogs, loading, error } = useFetch(url);

*/