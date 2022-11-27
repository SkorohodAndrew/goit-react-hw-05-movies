import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from 'components/fetch/Fetch';
import { Link, useLocation } from 'react-router-dom';
import {
  MoviesImage,
  MoviesImageList,
  Text,
  MoviesImageImage,
  Title,
} from './HomeStyled';

export const Home = () => {
  const location = useLocation();
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMoviesTrending().then(setTrends);
    setLoading(false);
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesImage>
        {trends.length > 0 &&
          trends.map(({ id, title, poster_path }) => {
            return (
              <MoviesImageList key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <MoviesImageImage
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                    alt={title}
                    width={290}
                    height={350}
                  />
                  <Text>{title}</Text>
                </Link>
              </MoviesImageList>
            );
          })}
      </MoviesImage>
    </div>
  );
};
