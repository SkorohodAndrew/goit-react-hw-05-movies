import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from 'components/fetch/Fetch';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMoviesTrending().then(setTrends);
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {trends.length > 0 &&
          trends.map(({ id, title, poster_path }) => {
            return (
              <li to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt={title}
                  width={260}
                  height={350}
                />
                <Link>{title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
