import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PAGE_NAMES from "./router/paths";

import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
// const MovieDetailsPage = lazy(
//   () => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"),
// );
// const Cast = lazy(() => import("./components/Cast/Cast"));
// const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);

function App() {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<HeaderLayout />}>
          <Route index element={<HomePage />} />

          {/* <Route path={PAGE_NAMES.movies} element={<MoviesPage />} /> */}

          {/* <Route path={PAGE_NAMES.movieDetails} element={<MovieDetailsPage />}>
            <Route path={PAGE_NAMES.cast} element={<Cast />} />
            <Route path={PAGE_NAMES.reviews} element={<Reviews />} />
          </Route> */}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
