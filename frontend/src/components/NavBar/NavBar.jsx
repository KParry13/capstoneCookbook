import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>My Cookbook</b>
          </Link>
        </li>
        <li>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <button>Search</button>
          </Link>
        {/* </li>
        <li> */}
          <Link to="/totry" style={{ textDecoration: "none", color: "white" }}>
            <button>Recipes To Try</button>
          </Link>
        {/* </li>
        <li> */}
          <Link to="/favorites" style={{ textDecoration: "none", color: "white" }}>
            <button>Favorite Recipes</button>
          </Link>
        {/* </li>
        <li> */}
          <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
            <button>Add Creations</button>
          </Link>
        {/* </li>
        <li> */}
          <Link to="/submitted" style={{ textDecoration: "none", color: "white" }}>
            <button>Chefs Submitted</button>
          </Link>
        {/* </li>
        <li> */}
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
