import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getPokemons, requestLogin } from "../../utils/FetchApi";
import Loading from "../Loading";
import roseImg from "../../img/rose.png";

const Home = () => {
  const [statePokemons, setStatePokemons] = useState([]);
  const [statePokemonsCopy, setStatePokemonsCopy] = useState([]);
  const [stateUsername, setStateUsername] = useState("");
  const [statePokemonSearch, setStatePokemonSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const loadDatas = async () => {
    const pokemons = await getPokemons();
    const userLocalStorage = localStorage.getItem("user");
    setStatePokemons(pokemons);
    setStatePokemonsCopy(pokemons);
    setStateUsername(userLocalStorage);
    setIsLoading(false);
  };

  function handleChange(event, setState) {
    setState(event.currentTarget.value);
  }

  function handleFilter() {
    const filtredPokemons = statePokemonsCopy.filter(
      (element) => element.name == statePokemonSearch
    );
    setStatePokemons(filtredPokemons);
  }

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
            <h4 onClick={() => navigate("/home")}>Home</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/favorites")}>Favorites</h4>
          </div>
          <div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      </nav>
      <div className="search-box">
        <div className="search-form">
          <label htmlFor="pokemonSearch" className="form-label">
            Search:
          </label>
          <input
            type="text"
            value={statePokemonSearch}
            onChange={(event) => handleChange(event, setStatePokemonSearch)}
            className="form-control"
            id="pokemonSearch"
          />
        </div>
        <div className="search-icon">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleFilter}
          ></i>
        </div>
      </div>
      <div className="pokemons-grid">
        {statePokemons.map((element) => {
          return (
            <div className="pokemon-card" key={element.id}>
              <div>
                <img src={element.image} alt="pokemon image"></img>
              </div>
              <p>{`N: ${element.id}`}</p>
              <p>{element.name}</p>
              <div>
                {element.types.map((type) => {
                  return (
                    <div
                      className={`type-${type.type} default-type`}
                      key={Math.random()}
                    >
                      <p>{type.type}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
