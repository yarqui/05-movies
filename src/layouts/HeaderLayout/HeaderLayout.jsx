import Heading from 'components/Heading/Heading';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const HeaderLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoClick = () => {
    console.log('Heading was clicked. Redirecting to home page');
    navigate('/', { state: { from: location } });
  };
  // const [searchParams] = useSearchParams();
  // console.log('searchParams:', searchParams);
  return (
    <div>
      <header>
        <Heading
          style={{
            ':hover': {
              cursor: 'pointer',
            },
          }}
          level={1}
          caption="MDB"
          onClick={onLogoClick}
          title="Go back"
        />
        {/* <h1>
          <span
            style={{ cursor: 'pointer' }}
            title="To home page"
            onClick={() => {
              console.log('Heading was clicked. Redirecting to home page');
              navigate('/', { state: { from: location } });
            }}
          >
            🍿
          </span>
          Simple movieDB sample
        </h1> */}
        <nav>
          <NavLink to="/" end>
            To home
          </NavLink>

          <NavLink to="/movies">To movies</NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default HeaderLayout;
