import { Suspense, useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import Spinner from "../../components/Spinner/Spinner";
import Heading from "../../components/Heading/Heading";
import Container from "../../components/Container/Container";

import { BASE_IMG_URL, getMovieById } from "../../services/movieDBApi";
import defaultPoster from "../../images/default-poster.jpg";
import PAGE_NAMES from "../../router/paths";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const backLink = location.state?.from ?? "/";

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();

    getMovieById(movieId, controller.signal)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => console.error(error.message));

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movie) return null;

  const { poster_path, title, overview, vote_average, release_date, genres } =
    movie;

  return (
    <Container css="flex flex-col gap-5">
      <button
        className="mt-6 self-start rounded-full border-2 border-slate-800 px-4 py-2 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
        type="button"
        onClick={() => navigate(backLink)}
      >
        Go back
      </button>

      <div className="flex gap-5 overflow-hidden rounded-md border bg-white shadow-md">
        <img
          src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
          alt={title}
          width="200px"
          loading="lazy"
        />

        <div className="flex flex-col gap-5 py-5 pe-5">
          <Heading level={2}>
            <span className="font-bold">Title:</span>{" "}
            {`${title ? title : "No title"} (${release_date ? release_date.slice(0, 4) : "No release year"})`}
          </Heading>

          <Heading level={3}>
            <span className="font-bold">Rating:</span>{" "}
            {vote_average ? vote_average.toFixed(1) : 0}
          </Heading>

          {genres && (
            <Heading level={3}>
              <span className="font-bold">Genres:</span>{" "}
              {genres.map((genre) => genre.name).join(", ")}.
            </Heading>
          )}

          <div className="max-h-32 overflow-y-auto">
            <Heading level={3}>
              <span className="font-bold">Description:</span>{" "}
              {overview ? overview : "No description"}
            </Heading>
          </div>
        </div>
      </div>

      <div className="flex max-w-fit gap-4 rounded-full bg-slate-700 px-4 py-1 text-white">
        <NavLink
          className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
          to={PAGE_NAMES.cast}
        >
          Cast
        </NavLink>
        <NavLink
          className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
          to={PAGE_NAMES.reviews}
        >
          Reviews
        </NavLink>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Spinner css={"h-32 w-32 opacity-32"} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetailsPage;
