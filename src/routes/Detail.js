import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

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
          <div>
            <h1>Movie Details</h1>
          </div>
          <div>
            <div>
              <img src={movie.medium_cover_image} alt={movie.title} />
            </div>
            <div>
              <div>
                <h1>{movie.title}</h1>
                <h6>{movie.year}</h6>
                <h6>{movie.rating}</h6>
                <p>{movie.description_intro}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
