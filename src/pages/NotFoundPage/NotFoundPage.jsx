import { Link } from "react-router-dom";
import PAGE_NAMES from "../../router/paths";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-3xl">Ops... no such page</h2>
      <Link
        className="rounded-full border-2 border-slate-800 px-4 py-2 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
        to={PAGE_NAMES.homepage}
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
