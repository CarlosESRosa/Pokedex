import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  desfavoritePokemon,
  favoritePokemon,
  getFavorites,
  getPokemonById,
  getPokemons,
  requestLogin,
} from "../../utils/FetchApi";
import Loading from "../Loading";
import roseImg from "../../img/rose.png";
import Navbar from "../../components/Navbar";

const PokeInfo = () => {
  const [statePokemon, setStatePokemons] = useState([]);
  const [stateUsername, setStateUsername] = useState("");
  const [stateFavorites, setStateFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const loadDatas = async () => {
    const pokemon = await getPokemonById(localStorage.getItem("pokeId"));
    const userLocalStorage = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const favorites = await getFavorites(token);
    const favoriteIds = favorites.map((element) => element.pokemon_id);
    setStateFavorites(favoriteIds);
    setStatePokemons(pokemon[0]);
    setStateUsername(userLocalStorage);
    setIsLoading(false);
  };

  useEffect(() => {
    loadDatas();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  async function handleDesfavorite() {
    const token = localStorage.getItem("token");
    await desfavoritePokemon(token, statePokemon.id);
    navigate("/home");
  }

  async function handleFavorite() {
    const token = localStorage.getItem("token");
    await favoritePokemon(token, statePokemon.id);
    navigate("/home");
  }

  return (
    <div className="info-page">
      <Navbar username={stateUsername} />
      <div className="pokeinfo-box">
        <h4>{statePokemon.name}</h4>
        <h4>{`N: ${statePokemon.id}`}</h4>
        <img src={statePokemon.image} alt="pokemon image"></img>
        <div className="pokeInfo-types">
          {statePokemon.types.map((type) => {
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
        <div>
          {stateFavorites.includes(statePokemon.id) ? (
            <button className="btn btn-dark" onClick={handleDesfavorite}>
              DESFAVORITE
            </button>
          ) : (
            <button className="btn btn-dark" onClick={handleFavorite}>
              FAVORITE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeInfo;
