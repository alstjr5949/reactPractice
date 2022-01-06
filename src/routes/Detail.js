import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <div className={styles.topImage}>
            <img src={movie.background_image} alt={movie.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
