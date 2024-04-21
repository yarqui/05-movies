import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from 'fakeMovies';
import { useTheme } from 'components/Context';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  const movies = getMovies();
  const { theme, setDarkTheme } = useTheme();
  console.log('theme in movies:', theme);

  const filterMovies = filter =>
    movies.filter(movie =>
      movie?.title?.toLowerCase().includes(filter?.toLowerCase())
    );

  const updateQueryParams = filter => {
    const nextParams = filter !== '' ? { filter } : {};
    setSearchParams(nextParams);
  };

  const visibleMovies = filterMovies(filter);

  return (
    <main>
      <h2>Movies</h2>
      <input
        value={filter}
        onChange={e => updateQueryParams(e.target.value.toLocaleLowerCase())}
      />
      <button onClick={setDarkTheme}>Set Dark Theme</button>
      <ul>
        {visibleMovies?.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Movies;
