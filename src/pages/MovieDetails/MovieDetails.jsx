import { getMovieById } from 'fakeMovies';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);

  return (
    <>
      <div>
        <p>Title: {movie.title}</p>
        <p>Description: {movie.description}</p>
      </div>

      <Link to="cast"> Show cast of the movie</Link>

      <Outlet />
    </>
  );
};

export default MovieDetails;
