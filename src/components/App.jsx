import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './home/Home';
import { Movies } from './movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<div>wqeqweqw</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};
