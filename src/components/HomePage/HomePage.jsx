import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import MoviesFolder from "../MoviesFolder/MoviesFolder";
import styles from "./HomePageStyles.module.css";
import Loader from "react-loader-spinner";

export default class HomePage extends Component {
  state = {
    films: [],
    showLoader: false,
  };

  componentDidMount = () => {
    SearchAPI.axiosTrendingFilms()
      .then((films) => this.setState({ films: films, showLoader: true }))
      .catch((error) => this.setState({ error }))
      .finally(this.setState({ showLoader: false }));
  };

  render() {
    const { films, showLoader } = this.state;
    return (
      <>
        <div className={styles.homePageFolder}>
          <p className={styles.p}>Trending today</p>
          <MoviesFolder arrayOfMovies={films} />
          {showLoader && (
            <Loader
              className={styles.loader}
              type="ThreeDots"
              color="#DB7093"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
        </div>
      </>
    );
  }
}
