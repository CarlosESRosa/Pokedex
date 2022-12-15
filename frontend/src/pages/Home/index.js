import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getPokemons, requestLogin } from "../../utils/FetchApi";
import Loading from "../Loading";
import roseImg from "../../img/rose.png";

const Home = () => {
  const [statePokemons, setStatePokemons] = useState([]);
  const [stateUsername, setStateUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadDatas = async () => {
    const pokemons = await getPokemons();
    const userLocalStorage = localStorage.getItem("user");
    setStatePokemons(pokemons);
    setStateUsername(userLocalStorage);
    setIsLoading(false);
  };

  useEffect(() => {
    loadDatas();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="home-page">
      <nav className="navbar fixed-top my-navbar">
        <img src={roseImg} alt="rose image"></img>
        <div className="my-navbar-seeds">
          <div className="nav-character">
            <i className="fa-solid fa-user"></i>
            <h4>{stateUsername}</h4>
          </div>
          <div>
            <h4>Home</h4>
          </div>
          <div>
            <h4>Favorites</h4>
          </div>
          <div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
