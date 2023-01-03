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
    <header className="header">
      <nav class="navbar navbar-expand-md ">
        <div class="container-fluid">
          <a class="navbar-brand ms-2" href="#">
            <img src={roseImg} alt="rose image"></img>
          </a>
          <button
            class="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link mx-1 fs-4" href="home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-1 fs-4" href="favorites">
                  Favorites
                </a>
              </li>
              <li>
                <a class="nav-link mx-1 fs-4" href="" onClick={logout}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
