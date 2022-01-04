import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navHome}>
        <Link to="/">M</Link>
      </div>
    </div>
  );
}

export default Nav;
