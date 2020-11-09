import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchAPI from "./SearchAPI";
import MoviesFolder from "./MoviesFolder";

export default class Movies extends Component {
  state = {
    films: [],
    searchQuery: "",
  };

  searchFilms = (query) => {
    SearchAPI.axiosFilms(query)
      .then((response) =>
        this.setState({ films: response, searchQuery: query })
      )
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { films, searchQuery } = this.state;
    return (
      <>
        <SearchInput onSubmit={this.searchFilms} />
        {films.length > 0 && <MoviesFolder arrayOfMovies={films} />}
      </>
    );
  }
}
