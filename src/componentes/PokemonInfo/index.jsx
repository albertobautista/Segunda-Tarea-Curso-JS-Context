import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import { PokemonInfoContext } from "../../context/PokemonInfoContext";
import { Link } from "react-router-dom";

const PokemonInfo = () => {
  const { pokemonId, pokemonDetail, doneFetch } =
    useContext(PokemonInfoContext);
  const { name, abilities, weight, height } = pokemonDetail;

  return (
    <>
      {doneFetch ? (
        !Array.isArray(pokemonDetail) ? (
          <Box display="flex" justifyContent="center">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  {name && (
                    <Typography variant="h5" component="h5">
                      Nombre: {name}
                    </Typography>
                  )}

                  {abilities.length > 0 && (
                    <>
                      <Typography component="span">Habilidades: </Typography>
                      {abilities.map(({ ability }, index) => (
                        <Typography key={index} component="span">
                          {ability.name}
                          {", "}
                        </Typography>
                      ))}
                    </>
                  )}
                  {weight && (
                    <Typography component="p">Peso: {weight}</Typography>
                  )}
                  {height && (
                    <Typography component="p">Altura: {height}</Typography>
                  )}
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "20px",
                  }}
                >
                  <Button p={5} variant="contained" color="secondary">
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      color="secondary"
                      to="/"
                    >
                      Regresar
                    </Link>
                  </Button>
                </div>
              </CardActionArea>
            </Card>
          </Box>
        ) : (
          "NO DATA"
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
      )}
    </>
  );
};

export default PokemonInfo;
