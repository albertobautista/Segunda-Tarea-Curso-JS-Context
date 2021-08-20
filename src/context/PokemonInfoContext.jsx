import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonInfoContext = createContext();

const PokemonInfoContextProvider = ({ children }) => {
  const { pokemonId } = useParams();

  const [doneFetch, setDoneFetch] = useState();
  const [pokemonDetail, setPokemonDetail] = useState([]);

  const getPokemonDetail = (pokemonId) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setDoneFetch(true);
        setPokemonDetail(data);
      })
      .catch((error) => console.log("Error in getPokemonDetail ", error));
  };

  useEffect(() => {
    getPokemonDetail(pokemonId);
  }, [pokemonId]);

  return (
    <PokemonInfoContext.Provider
      value={{ pokemonId, doneFetch, pokemonDetail }}
    >
      {children}
    </PokemonInfoContext.Provider>
  );
};

export default PokemonInfoContextProvider;
