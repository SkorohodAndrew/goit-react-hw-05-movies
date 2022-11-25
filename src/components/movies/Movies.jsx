import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesInput } from 'components/fetch/Fetch';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const filter = searchParams.get('movie');

  console.log(filter);

  // useEffect(() => {
  //   searchMoviesInput().then(setMovies);
  // }, []);

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
    setSearchParams({ movie: query } || {});
  };

  return (
    <div>
      <form className="form" onChange={handleSubmit}>
        <button type="submit" className="button">
          Search
        </button>

        <input
          onChange={handleChange}
          value={query}
          name="name"
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>

      {movies && (
        <ul>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <li key={id} to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt={title}
                  width={260}
                  height={350}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
