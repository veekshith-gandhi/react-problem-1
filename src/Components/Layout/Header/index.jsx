/** @format */

import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/addcity">Add City</Link>
      </span>
      <span>
        <Link to="/addcountry">Add Country</Link>
      </span>
    </div>
  );
};

export default Header;
