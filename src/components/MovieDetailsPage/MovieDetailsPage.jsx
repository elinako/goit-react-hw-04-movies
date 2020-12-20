import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import { NavLink, Route } from "react-router-dom";
import routes from "../../routes";
import Loader from "react-loader-spinner";
import styles from "./MoviesDetailsPageStyles.module.css";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    showLoader: false,
  };

  componentDidMount = () => {
    SearchAPI.axiosMovieDetails(this.props.match.params.movieId)
      .then((response) => this.setState({ movie: response, showLoader: true }))
      .catch((error) => this.setState({ error }))
      .finally(this.setState({ showLoader: false }));
  };

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(this.props.location.state.from);
    }

    this.props.history.push(routes.home);
  };

  render() {
    const { movie, showLoader } = this.state;

    return (
      <>
        <div className={styles.moviePageContainer}>
          {movie && (
            <>
              <button className={styles.buttonBack} onClick={this.handleGoBack}>
                Go back
              </button>
              <div className={styles.movieDescription}>
                <h2 className={styles.movieTitle}>{movie.title}</h2>

                <div className={styles.movieDetails}>
                  <img
                    className={styles.img}
                    src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    width="300"
                    alt={movie.title}
                  />

                  <div className={styles.textContainer}>
                    <p className={styles.ratingText}>
                      {" "}
                      Rating:{`${movie.vote_average * 10} %`}
                    </p>
                    <h3>Overview</h3>
                    {movie.overview ? (
                      <p>{movie.overview}</p>
                    ) : (
                      "No overwiev for this film"
                    )}
                    <h3>Genres</h3>
                    <ul className={styles.listOfGenres}>
                      {movie.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.additional}>
                <h3 className={styles.additionalTitle}>
                  Additional information
                </h3>
                <div className={styles.additionalContainer}>
                  <div>
                    <NavLink
                      className={styles.link}
                      activeClassName={styles.activeLink}
                      to={`/movies/${this.props.match.params.movieId}/cast`}
                    >
                      Cast
                    </NavLink>
                    <Route path={routes.cast} component={Cast} />
                  </div>
                  <div>
                    <NavLink
                      className={styles.link}
                      activeClassName={styles.activeLink}
                      to={`/movies/${this.props.match.params.movieId}/reviews`}
                    >
                      Reviews
                    </NavLink>
                    <Route path={routes.reviews} component={Reviews} />
                  </div>
                </div>
              </div>
            </>
          )}
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
