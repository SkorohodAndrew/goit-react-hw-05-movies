import { useState } from 'react';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  //   const [searchParams, setSearchParams] = useSearchParams({});
  const [name, setName] = useState('');

  //   useEffect(() => {}, []);

  //   const handleChange = e => {
  //     setName(e.target.value);
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     setSearchParams({ movie: query } || {});
  //     setName('');
  //   };

  return (
    <div>
      <form className="form">
        <button type="submit" className="button">
          Search
        </button>

        <input
          //   onChange={handleChange}
          //   value={this.state.name}
          name="name"
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>

      {/* {movies && (
        <ul>
          {movies.map(({ id, title, name, poster_path }) => {
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
      )} */}
    </div>
  );
};
