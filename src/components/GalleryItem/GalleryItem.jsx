import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import { BASE_IMG_URL } from "../../services/movieDBApi";

import deafaultPoster from "../../images/default-poster.jpg";

const GalleryItem = ({
  movie: {
    id,
    title,
    original_title,
    name,
    original_name,
    poster_path,
    release_date,
    first_air_date,
  },
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const airYear = release_date ?? first_air_date;
  const movieTitle = title ?? name ?? original_title ?? original_name;

  const onItemClick = (id) => {
    navigate(`/movies/${id}`, { state: { from: location } });
  };

  return (
    <li
      key={id}
      className="hover:scale-101 flex flex-col overflow-hidden  rounded-md bg-white shadow-md transition-all hover:cursor-pointer"
      onClick={() => onItemClick(id)}
    >
      <img
        className=""
        src={poster_path ? `${BASE_IMG_URL}${poster_path}` : deafaultPoster}
        alt={movieTitle ?? "poster"}
        loading="lazy"
      />

      <div className="flex items-center justify-center p-2">
        <p className="">
          {movieTitle ?? "No title"} {airYear && `(${airYear.slice(0, 4)})`}
        </p>
      </div>
    </li>
  );
};

GalleryItem.propTypes = { movie: PropTypes.object };

export default GalleryItem;
