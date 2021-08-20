import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PokemonDetail from "../PokemonDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const PokemonList = ({ pokemons }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {pokemons.map(({ name, url }) => {
          const getURLId = url.split("/");
          const pokemonId = getURLId[6];
          return <PokemonDetail key={name} name={name} pokemonId={pokemonId} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
