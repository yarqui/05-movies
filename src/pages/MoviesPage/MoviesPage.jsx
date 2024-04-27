import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Gallery from "../../components/Gallery/Gallery";

import { getMoviesByQuery } from "../../services/movieDBApi";
import { useLoading } from "../../context/LoadingContext";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const query = searchParams.get("query");

    if (!query) return;

    const controller = new AbortController();

    setIsLoading(true);

    getMoviesByQuery(query, controller.signal)
      .then((res) => {
        if (res?.length === 0) {
          toast.error("No results");
          return;
        }
        setMovies(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [searchParams, setIsLoading]);

  return (
    <main>
      <Container>
        <Form />

        <Gallery css="grid-cols-gallery-movie" movies={movies} />
      </Container>
    </main>
  );
};
export default MoviesPage;
