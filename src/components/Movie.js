import propTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, largeCoverImage, title, summary, genres }) {
  return (
    <div className={styles.movieWrapper}>
      <img className={styles.imgs} src={largeCoverImage} alt={title} />
      <div className={styles.texts}>
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
