import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <div className="nav">
      <ul>
        <li>
          <Link to = "/">Logo</Link>
        </li>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/create">Create</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;