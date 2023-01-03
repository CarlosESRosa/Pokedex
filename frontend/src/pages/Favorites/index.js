import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getFavorites, getPokemons, requestLogin } from "../../utils/FetchApi";
import Loading from "../Loading";
import roseImg from "../../img/rose.png";
import Navbar from "../../components/Navbar";

const Favorites = () => {
  const [statePokemons, setStatePokemons] = useState([]);
  const [statePokemonsCopy, setStatePokemonsCopy] = useState([]);
  const [stateUsername, setStateUsername] = useState("");
  const [statePokemonSearch, setStatePokemonSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const loadDatas = async () => {
    const pokemons = await getPokemons();
    const token = localStorage.getItem("token");
    const favorites = await getFavorites(token);
    const favoriteIds = favorites.map((element) => element.pokemon_id);
    const userLocalStorage = localStorage.getItem("user");
    const favoritesPokemons = pokemons.filter((element) =>
      favoriteIds.includes(element.id)
    );
    setStatePokemons(favoritesPokemons);
    setStatePokemonsCopy(favoritesPokemons);
    setStateUsername(userLocalStorage);
    setIsLoading(false);
  };

  function handleChange(event, setState) {
    setState(event.currentTarget.value);
  }

  function handleFilter() {
    const filtredPokemons = statePokemonsCopy.filter((element) =>
      element.name.includes(statePokemonSearch)
    );
    console.log("entrou", filtredPokemons);
    setStatePokemons(filtredPokemons);
  }

  useEffect(() => {
    loadDatas();
  }, []);

  function pokeInfo(event, pokemon) {
    localStorage.setItem("pokeId", pokemon.id);
    navigate(`/pokemon/${pokemon.id}`);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="home-page">
      <Navbar username={stateUsername} />
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
            <div
              className="pokemon-card"
              key={element.id}
              onClick={(event) => pokeInfo(event, element)}
            >
              <div className="favorite-grid">
                <i className="fa-sharp fa-solid fa-heart favorited"></i>
              </div>

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

export default Favorites;
