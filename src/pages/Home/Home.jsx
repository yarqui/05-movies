import Container from 'components/Container/Container';
import Gallery from 'components/Gallery/Gallery';
import Heading from 'components/Heading/Heading';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTrendingMovies } from 'services/movieDBApi';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(res => {
        setMovies(res);
      })
      .catch(error => console.error(error.message));
  }, []);



  return (
    <Container>
      <button type="button">Go back</button>

      <Heading
        style={{ ':hover': { cursor: 'pointer' } }}
        level={2}
        caption="Trending today"
        title="Go back"
      />

      <Gallery movies={movies} />
    </Container>
  );
};

export default Home;
