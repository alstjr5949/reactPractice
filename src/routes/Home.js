import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year&limit=10"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <div className={styles.smallTitle}>
            <h1>Today's TOP 10 Movies</h1>
          </div>
          <div className={styles.slideWrapper}>
            <div className={styles.slideContainer}>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  largeCoverImage={movie.large_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.prevBtn}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={styles.nextBtn}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
