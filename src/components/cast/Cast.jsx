import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesActor } from 'components/fetch/Fetch';
import { Loader } from 'components/loader/Loader';
import { InfoMovies, InfoMoviesItem } from './CastStyled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchMoviesActor(movieId)
      .then(setCast)
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <InfoMovies>
      {loading && <Loader />}
      <InfoMoviesItem>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
                width={100}
                height={150}
              />
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </InfoMoviesItem>
    </InfoMovies>
  );
};
