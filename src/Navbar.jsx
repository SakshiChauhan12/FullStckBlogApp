const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="site-title">
                MIT BLOGPOSTS
            </div>
            <ul>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/blogs/form">New Blog</a></li>
                <li><a href="/auth/login">Login</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
