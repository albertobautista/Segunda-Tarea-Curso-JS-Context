import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Nabvar from "./componentes/Navbar";
import theme from "./theme";
import Catalog from "./componentes/Catalog";
import PokemonContextProvider from "./context/PokemonContext";
import Home from "./Home";
import PokemonInfo from "./componentes/PokemonInfo";
import PokemonInfoContextProvider from "./context/PokemonInfoContext";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Nabvar />
      <div style={{ marginTop: "100px" }}>
        <Switch>
          <Route exact path="/">
            <PokemonContextProvider>
              <Home />
            </PokemonContextProvider>
          </Route>
          <Route path="/pokemon/detail/:pokemonId">
            <PokemonInfoContextProvider>
              <PokemonInfo />
            </PokemonInfoContextProvider>
          </Route>
          <Route exact path="/pokemons" component={Catalog} />
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
