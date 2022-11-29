import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { Home } from './home/Home';
// import { Movies } from './movies/Movies';
// import { Details } from './details/Details';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() =>
  import('../components/home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Movies = lazy(() =>
  import('../components/movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const Details = lazy(() =>
  import('../components/details/Details').then(module => ({
    ...module,
    default: module.Details,
  }))
);
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<Details />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
