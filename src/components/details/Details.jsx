import { useEffect, useState } from 'react';
import { searchMoviesDetails } from 'components/fetch/Fetch';
import { useParams, useLocation, NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import {
  CardMovies,
  TextTitle,
  ButtonBack,
  TextMovies,
  TextOverview,
  CardMoviesItem,
  MoviesGenresList,
  TextGenres,
  TextMoviesInfo,
  CardMoviesInfo,
} from './DetailStyled';

export const Details = () => {
  const { movieId } = useParams();
  // const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';

  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const back = () => navigate(backLink);

  useEffect(() => {
    // setLoading(true);
    searchMoviesDetails(movieId)
      .then(setMovies)
      .catch(error => console.log(error));
    // .finally(setLoading(false));
  }, [movieId]);

  if (!movies) {
    return;
  }

  const { poster_path, title, overview, vote_average, genres } = movies;

  return (
    <div>
      {/* <Link> */}
      <ButtonBack onClick={back}> Go back</ButtonBack>
      {/* </Link> */}

      <CardMovies>
        <CardMoviesItem>
          <TextTitle>{title}</TextTitle>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
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

      <CardMovies>
        <TextMoviesInfo>Additional information</TextMoviesInfo>
        <CardMoviesInfo>
          <NavLink to={'cast'} state={{ from: location.state?.from }}>
            Cast
          </NavLink>
        </CardMoviesInfo>
        <CardMoviesInfo>
          <NavLink to={'reviews'} state={{ from: location.state?.from }}>
            Reviews
          </NavLink>
        </CardMoviesInfo>
      </CardMovies>
      <Outlet />
    </div>
  );
};
