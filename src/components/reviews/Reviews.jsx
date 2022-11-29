import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'components/fetch/Fetch';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // setLoading(true);
    fetchMoviesReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
    // .finally(setLoading(false));
  }, [movieId]);

  if (!reviews) {
    return;
  }
  return (
    <div>
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
