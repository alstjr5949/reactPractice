import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, largeCoverImage, title, summary, genres }) {
  return (
    <div className={styles.movieWrapper}>
      <Link to={`movie/${id}`}>
        <img className={styles.imgs} src={largeCoverImage} alt={title} />
      </Link>
      <div className={styles.texts}>
        <div className={styles.titleBox}>
          <h2>
            <Link to={`movie/${id}`}>{title}</Link>
          </h2>
        </div>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
/*
      
*/

Movie.propTypes = {
  id: propTypes.number.isRequired,
  mediumCoverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
