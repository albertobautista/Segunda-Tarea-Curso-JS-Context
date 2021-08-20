import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PokemonContext } from "../context/PokemonContext";
import PokemonList from "../componentes/PokemonList";

const Home = () => {
  const { doneFetch, pokemons } = useContext(PokemonContext);

  return doneFetch ? (
    pokemons.length > 0 ? (
      <PokemonList pokemons={pokemons} />
    ) : (
      "NO HAY"
    )
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} color="primary" />
    </div>
  );
};

export default Home;
