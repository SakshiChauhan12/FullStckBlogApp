const Blog = ({blog, title}) => {
    
    // Q: Render the blog object as title and content in the Blog component.
    // Q: write a funtion which takes input as blog and returns a template
    function getJsXTemplateFromObject(blog) {
        return (<div>
                    <h4>{blog.title}</h4>
                    <p>{blog.author}</p>
                    <p>{blog.content}</p>
                </div>);
    }
    return (
        <section>
            {console.log("Data in the blog component")}
            {console.log(blog)}
            <h2>{title}</h2>
            {getJsXTemplateFromObject(blog)}
        </section>
    );
}

export default Blog;