import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getMovieReviews } from "../../services/movieDBApi";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();

    getMovieReviews(movieId, controller.signal)
      .then((reviews) => {
        setMovieReviews(reviews);
        if (reviews?.length === 0) {
          toast.error("No reviews data");
          return;
        }
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });

    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      {movieReviews?.length > 0 && (
        <ul className="flex max-w-screen-lg flex-col gap-5">
          {movieReviews.map(({ id, author, content }) => (
            <li
              className="rounded-md bg-white p-4 shadow-md transition-colors hover:bg-slate-50"
              key={id}
            >
              <h5 className="mb-5">
                <span className="font-bold">Author:</span> {author}.
              </h5>

              <p className="text-sm font-normal">{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
