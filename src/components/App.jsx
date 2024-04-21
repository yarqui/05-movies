import { Route, Routes } from 'react-router-dom';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import HeaderLayout from '../layouts/HeaderLayout/HeaderLayout';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>

        <Route path="*" element={<p>404. Not Found</p>} />
      </Route>
    </Routes>
  );
};
