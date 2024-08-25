const BlogsDB = ({ blogs, title }) => { // Destructuring the props object

    return (
        <section>
            <h1>{title}!!</h1>
            {blogs.map((blog) =>
                <div className="blog-item" key={blog.id}>
                    <h4>{blog.title}</h4>
                    <p>{blog.content}</p>
                    <p>{blog.author}</p>
                </div>
            )}
        </section>
    );
}

export default BlogsDB;