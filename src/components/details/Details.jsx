import { useEffect, useState } from 'react';
import { searchMoviesDetails } from 'components/fetch/Fetch';
import { useParams, Link, useLocation } from 'react-router-dom';

import {
  CardMovies,
  TextTitle,
  ButtonBack,
  TextMovies,
  TextOverview,
  CardMoviesItem,
  MoviesGenresList,
  TextGenres,
} from './DetailStyled';

export const Details = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    searchMoviesDetails(movieId)
      .then(setMovies)
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, [movieId]);

  if (!movies) {
    return;
  }

  const { poster_path, title, overview, vote_average, genres } = movies;

  return (
    <div>
      <Link to={backLinkHref}>
        <ButtonBack> Go back</ButtonBack>
      </Link>

      <CardMovies>
        <CardMoviesItem>
          <TextTitle>{title}</TextTitle>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            width={290}
            height={350}
          />
        </CardMoviesItem>

        <CardMoviesItem>
          <TextMovies>Overview</TextMovies>
          <TextOverview>{overview}</TextOverview>
          <TextMovies>User score: {vote_average}/10</TextMovies>
          <div>
            <TextMovies>Genres</TextMovies>
            {genres && (
              <MoviesGenresList>
                {genres.map((genre, id) => {
                  return (
                    <MoviesGenresList key={id}>
                      <TextGenres>{genre.name}</TextGenres>
                    </MoviesGenresList>
                  );
                })}
              </MoviesGenresList>
            )}
          </div>
        </CardMoviesItem>
      </CardMovies>
    </div>
  );
};
