import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-icons">
        <FaBars
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
      </div>

      <Link to="/">
        <img
          src={logo}
          alt="School Logo"
          style={{ height: "60px", width: "desired_width", cursor: "pointer" }}
        />
      </Link>
      <div className="nav-links">
        {navLinks.map((nav) => (
          <NavLink to={nav.link} key={nav.id} className="link">
            {nav.id}
          </NavLink>
        ))}
      </div>
      <div className={`${toggle ? "show" : "hidden"}`}>
        {navLinks.map((nav) => (
          <NavLink to={nav.link} key={nav.id}>
            {nav.id}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
