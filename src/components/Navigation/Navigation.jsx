import routes from "../../routes";
import { NavLink } from "react-router-dom";
import styles from "./NavigationStyles.module.css";

const Navigation = () => {
  return (
    <div className={styles.mask}>
      <div className={styles.background}>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={styles.link}
              exact
              activeClassName={styles.activeLink}
              to={routes.home}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              to={routes.movies}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
