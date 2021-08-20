import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => {
        setDoneFetch(true);
        setPokemons(data.results);
      })
      .catch((error) => console.log("Error in getPokemons ", error));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ doneFetch, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
