import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMoviesInput } from 'components/fetch/Fetch';
import {
  SearchForm,
  FormInput,
  SearchBarHeader,
  ButtonNav,
  MoviesImage,
  MoviesImageList,
  Text,
} from './MoviesStyled';
import { Loader } from 'components/loader/Loader';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const filter = searchParams.get('movie') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (filter) {
      setLoading(true);
      searchMoviesInput(filter)
        .then(setMovies)
        .catch(error => console.log(error))
        .finally(setLoading(false));
    }

    if (!movies) {
      return;
    }
  }, [filter, movies]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { movie: query } : {});
    setQuery('');
  };

  return (
    <div>
      <SearchBarHeader>
        <SearchForm className="form" onSubmit={handleSubmit}>
          <ButtonNav type="submit" className="button">
            Search
          </ButtonNav>

          <FormInput
            onChange={handleChange}
            value={query}
            name="name"
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </SearchForm>
      </SearchBarHeader>
      {loading && <Loader />}
      {movies && (
        <MoviesImage>
          {movies.map(({ id, title, name, poster_path }) => {
            return (
              <MoviesImageList key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                    alt={title}
                    width={260}
                    height={350}
                  />
                  <Text> {title}</Text>
                </Link>
              </MoviesImageList>
            );
          })}
        </MoviesImage>
      )}
    </div>
  );
};
