const BlogList = ({blogs, deleteBlogForId, title}) => {


    function getJsXTemplateFromObject(blog) {
        return (<div>
                    <h4>{blog.title}</h4>
                    <p>{blog.author}</p>
                    <p>{blog.content}</p>
                    <button onClick={() => deleteBlogForId(blog.id)} >Delete Blog</button>
                </div>);
    }

    // blogs -> array of blog (js)
    // iterate through each element and convert it to JSX
    // new array -> array of JSX templates
    // blogs -> [blog1, blog2, blog3]
    // jsxBlogs -> [jsx1, jsx2, jsx3]
    const jsxBlogs = [];
    for(let i = 0; i < blogs.length ;i++ ){
        const jsxTemplate = getJsXTemplateFromObject(blogs[i]);
        jsxBlogs.push(jsxTemplate);
    }

    return (
        <section>
            <h1>{title}</h1>
            {jsxBlogs}
        </section>
    );
}

export default BlogList;
