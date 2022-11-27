import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './home/Home';
import { Movies } from './movies/Movies';
import { Details } from './details/Details';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<Details />}>
            <Route path="cast" element={<div>3435435</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
