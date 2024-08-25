import { Link } from "react-router-dom";

const BlogsNav = () => {
    return (
        <nav className="navbar">
            <div className="site-title">
                <Link to="/">BLOGS NAV</Link>
            </div>
            <ul>
                <li> <Link to="/blogs">All Blogs</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li><Link to="/cleanup">Cleanup</Link></li>
                <li><Link to="/newblog">New Blog</Link></li>
            </ul>
        </nav>
    );
}

export default BlogsNav;
