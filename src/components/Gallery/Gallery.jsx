import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";

const Gallery = ({ movies, css }) => {
  const classes = `${css || ""} mb-0 ml-auto mr-auto mt-0 grid list-none gap-5 p-0`;

  return (
    <ul className={classes}>
      {movies?.map((movie) => {
        return <GalleryItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default Gallery;

Gallery.propTypes = {
  movies: PropTypes.array,
  css: PropTypes.string,
};
