import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import CastItem from "../CastItem/CastItem";
import { useLoading } from "../../context/LoadingContext";
import { getMovieCredits } from "../../services/movieDBApi";

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();

    setIsLoading(true);
    getMovieCredits(movieId, controller.signal)
      .then((cast) => {
        setCredits(cast);
        if (cast?.length === 0) {
          toast.error("No cast data");
          return;
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [movieId, setIsLoading]);

  return (
    <>
      {credits?.length > 0 && (
        <ul className="grid-cols-gallery-cast mb-0 ml-auto mr-auto mt-0 grid list-none gap-5 p-0">
          {credits?.map((castMember) => (
            <CastItem key={castMember.id} castMember={castMember} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
