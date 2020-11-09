import React, { Component } from "react";
import SearchAPI from "./SearchAPI";
import MoviesFolder from "./MoviesFolder";

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount = () => {
    SearchAPI.axiosTrendingFilms().then((films) => this.setState({ films }));
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <p>Trending today</p>
        <MoviesFolder arrayOfMovies={films} />
      </>
    );
  }
}
