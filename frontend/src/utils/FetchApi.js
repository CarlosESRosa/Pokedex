import axios from "axios";

export const requestLogin = async (username, password) => {
  const { data } = await axios.post(
    "http://localhost:3001/login",
    { username: username, password: password },
    {
      headers: {
        "Content-Type": "application/json",
        // Accept: 'application/json',
      },
    }
  );

  console.log(JSON.stringify(data));

  return data;
};

export const registerUser = async (username, password) => {
  const { data } = await axios.post(
    "http://127.0.0.1:3001/user",
    { username: username, password: password },
    {
      headers: {
        "Content-Type": "application/json",
        // Accept: 'application/json',
      },
    }
  );

  console.log(JSON.stringify(data));

  return data;
};

export const getPokemons = async () => {
  const { data } = await axios.get("http://127.0.0.1:3001/pokemon", {
    headers: {
      "Content-Type": "application/json",
      // Accept: 'application/json',
    },
  });

  //console.log(JSON.stringify(data));

  return data;
};

export const getPokemonById = async (id) => {
  const { data } = await axios.get(`http://127.0.0.1:3001/pokemon/${id}`, {
    headers: {
      "Content-Type": "application/json",
      // Accept: 'application/json',
    },
  });

  //  console.log(JSON.stringify(data));

  return data;
};

export const getFavorites = async (token) => {
  const { data } = await axios.get("http://127.0.0.1:3001/favorite", {
    headers: {
      Authorization: token,
    },
  });

  //console.log(JSON.stringify(data));

  return data;
};

export const favoritePokemon = async (token, id) => {
  const { data } = await axios.post(
    "http://127.0.0.1:3001/favorite",
    { pokemon_id: id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        // Accept: 'application/json',
      },
    }
  );

  // console.log(JSON.stringify(data));

  return data;
};

export const desfavoritePokemon = async (token, id) => {
  const data = axios.delete("http://127.0.0.1:3001/favorite", {
    headers: {
      Authorization: token,
    },
    data: {
      pokemon_id: id,
    },
  });

  //  console.log(JSON.stringify(data));
};
