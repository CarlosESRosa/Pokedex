import React from "react";
import roseImg from "../img/rose.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar fixed-top my-navbar">
      <img src={roseImg} alt="rose image"></img>
      <div className="my-navbar-seeds">
        <div className="nav-character">
          <i className="fa-solid fa-user"></i>
          <h4>{props.username}</h4>
        </div>
        <div>
          <h4 onClick={() => navigate("/home")}>Home</h4>
        </div>
        <div>
          <h4 onClick={() => navigate("/favorites")}>Favorites</h4>
        </div>
        <div onClick={logout} className="logout-button">
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
