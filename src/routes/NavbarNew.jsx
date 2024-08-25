import { Link } from "react-router-dom";


const NavbarNew = () => {
    return (
        <nav className="navbar">
            <div className="site-title">
                MIT BLOGPOSTS
            </div>
            <ul>
                {/* <li><a href="/route1">Route1</a></li> */}
                <li> <Link to="/route1">Route1</Link> </li>
                <li> <Link to="/route2">Route2</Link> </li>
            </ul>
        </nav>
    );
}

export default NavbarNew;
