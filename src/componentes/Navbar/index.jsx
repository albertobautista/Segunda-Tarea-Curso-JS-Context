import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pokemon App
          </Typography>

          <Button color="secondary">
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
