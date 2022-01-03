import propTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, largeCoverImage, title, summary, genres }) {
  const [hover, setHover] = useState(false);
  const mouseEnter = () => {
    setHover(true);
  };
  const mouseLeave = () => {
    setHover(false);
  };
  return (
    <div className={styles.movieWrapper}>
      <img
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.imgs}
        src={largeCoverImage}
        alt={title}
      />
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={hover ? styles.block : styles.none}
      >
        <div className={styles.titleBox}>
          <h2>
            <Link to={`movie/${id}`}>{title}</Link>
          </h2>
        </div>
        <div className={styles.summaryBox}>
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
        <div className={styles.genreBox}>
          <h3>Genres</h3>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
/*
      
*/

Movie.propTypes = {
  id: propTypes.number.isRequired,
  largeCoverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
