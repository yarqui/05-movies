import { Suspense } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

import Heading from "../../components/Heading/Heading";
import Spinner from "../../components/Spinner/Spinner";
import PAGE_NAMES from "../../router/paths";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoClick = () => {
    navigate("/", { state: { from: location } });
  };

  return (
    <div className=" ml-auto mr-auto ">
      <header className="relative w-screen bg-white py-2 shadow-sm shadow-slate-300">
        <div className="flex items-center justify-center">
          <Heading
            css={"absolute left-5 hover:cursor-pointer text-5xl font-bold"}
            level={1}
            onClick={onLogoClick}
            title="To Home page"
          >
            <span className="flex items-center gap-2 text-slate-700">
              <RiMovie2Fill className="h-12 w-12 fill-slate-700" />
              MDB
            </span>
          </Heading>

          <nav className="flex justify-center gap-5 rounded-full bg-slate-700 px-9 py-1 text-lg">
            <NavLink
              className="px-4 py-2 text-white transition-all duration-200"
              to={PAGE_NAMES.homepage}
              end
            >
              Home
            </NavLink>

            <NavLink
              className="px-4 py-2 text-white transition-all duration-200"
              to={PAGE_NAMES.movies}
            >
              Movies
            </NavLink>
          </nav>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="flex items-center justify-center p-10">
            <Spinner css={"h-32 w-32 opacity-75"} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HeaderLayout;
