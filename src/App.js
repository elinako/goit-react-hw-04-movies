import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import HomePage from "./components/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.movies}>Movies</Link>
          </li>
        </ul>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movies} exact component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
