import styled from '@emotion/styled';

export const CardMovies = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  margin: auto;
  text-align: center;
  align-items: center;
  border-radius: 2px;

  // top: 50%;
  // left: 50%;
  box-shadow: 0 0 2rem #000;
  // position: absolute;
`;

export const CardMoviesItem = styled.div`
  padding: 20px;
`;

export const TextTitle = styled.h1`
  text-align: center;
  margin: 0;
  color: #c5dbe7;
  margin-bottom: 10px;

  font-size: 40px;
  font-weight: bold;
`;
export const TextMovies = styled.h2`
  color: #c5dbe7;
  font-family: Montserrat;
`;
export const TextOverview = styled.h3`
  line-height: 1.5em;
  text-align: justify;
`;

export const MoviesGenresList = styled.ul`
  text-decoration: none;
  padding: 0;
`;
export const TextGenres = styled.h3`
  text-align: justify;
  text-align: center;
`;

export const ButtonBack = styled.button`
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  margin-left: auto;
  margin-left: 20px;
  padding: 10px 20px;
  border: 0;

  color: #e4c9c9;
  background-color: darkred;
  border-radius: 5px;

  font-family: inherit;
  font-size: 22px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #531919;
  }
`;
