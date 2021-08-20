import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

const PokemonDetail = ({ name, pokemonId, history, match }) => {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Card>
        <CardActionArea
          onClick={() =>
            history.push(`${match.url}pokemon/detail/${pokemonId}`)
          }
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="320"
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            title="Contemplative Reptile"
          />
          <CardContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withRouter(PokemonDetail);
