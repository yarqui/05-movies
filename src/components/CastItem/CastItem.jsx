import PropTypes from "prop-types";
import { BASE_IMG_URL } from "../../services/movieDBApi";
import defaultCastImage from "../../images/default-image.jpg";

const CastItem = ({ castMember }) => {
  const { profile_path, name } = castMember;

  const imgSrc = `${BASE_IMG_URL}${profile_path}`;

  return (
    <li className="flex flex-col items-center justify-between gap-3 overflow-hidden rounded-md bg-white shadow-md">
      <img
        src={profile_path ? imgSrc : defaultCastImage}
        alt={`actor ${name}`}
        width={"100%"}
        loading="lazy"
      />

      <div className="px-2 pb-2">
        <p className="text-sm">
          {(name.length > 20 ? `${name.slice(0, 20)}...` : name) || "No name"}
        </p>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  castMember: PropTypes.object,
};

export default CastItem;
