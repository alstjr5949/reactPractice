import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navHome}>
        <Link to="/">
          <div className={styles.drop}>
            <FontAwesomeIcon icon={faFilm} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
