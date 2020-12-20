import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import Loader from "react-loader-spinner";
import styles from "./CastStyles.module.css";

export default class Cast extends Component {
  state = {
    cast: null,
    showLoader: false,
  };

  componentDidMount = () => {
    SearchAPI.axiosCast(this.props.match.params.movieId)
      .then((response) =>
        this.setState({ cast: response.cast, showLoader: true })
      )
      .catch((error) => this.setState({ error }))
      .finally(this.setState({ showLoader: false }));
  };

  render() {
    const { cast, showLoader } = this.state;
    return (
      <>
        {cast && (
          <ul className={styles.castFolder}>
            {cast.map((actor) => (
              <li className={styles.listElement} key={actor.id}>
                <div className={styles.actorNameFolder}>
                  <p className={styles.actorName}>{actor.name}</p>
                  <p className={styles.actorCharacter}>
                    Caracter:{actor.character}
                  </p>
                </div>
                {actor.profile_path && (
                  <img
                    src={`http://image.tmdb.org/t/p/w185//${actor.profile_path}`}
                    width="150"
                    alt={actor.name}
                  />
                )}
              </li>
            ))}
          </ul>
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
      </>
    );
  }
}
