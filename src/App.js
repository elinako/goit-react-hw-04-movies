import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import Loader from "react-loader-spinner";
import styles from "./styles/LoaderStyles.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Suspense
          fallback={
            <Loader
              className={styles.loader}
              type="ThreeDots"
              color="#DB7093"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Route
            path={routes.home}
            exact
            component={lazy(() => import("./components/HomePage/HomePage"))}
          />
          <Route
            path={routes.movies}
            exact
            component={lazy(() => import("./components/MoviesPage/MoviesPage"))}
          />
          <Route
            path={routes.movieDetails}
            component={lazy(() =>
              import("./components/MovieDetailsPage/MovieDetailsPage")
            )}
          />
        </Suspense>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
