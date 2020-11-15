import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import routes from "../routes";
uuidv4();

const MoviesFolder = ({ arrayOfMovies, locationTo }) => {
  console.log(locationTo);
  return (
    <ul>
      {arrayOfMovies.map((movieItem) => (
        <li key={uuidv4()}>
          <Link
            to={{
              pathname: `${routes.movies}/${movieItem.id}`,
              state: { from: locationTo },
            }}
          >
            <p>{movieItem.title ? movieItem.title : movieItem.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesFolder;
