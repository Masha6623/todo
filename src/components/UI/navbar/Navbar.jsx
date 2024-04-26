import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
        <div className="navbar_links">
          <Link to="/posts">Посты</Link>
          <Link to="/about">О сайте</Link>
        </div>
      </div>
     );
}
 
export default Navbar;