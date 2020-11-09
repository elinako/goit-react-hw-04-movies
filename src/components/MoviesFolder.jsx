import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import routes from "../routes";
uuidv4();

const MoviesFolder = ({ arrayOfMovies }) => {
  return (
    <ul>
      {arrayOfMovies.map((movieItem) => (
        <li key={uuidv4()}>
          <Link to={`${routes.movies}/${movieItem.id}`}>
            <p>{movieItem.title ? movieItem.title : movieItem.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesFolder;
