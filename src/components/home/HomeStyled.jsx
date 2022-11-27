import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

export const MoviesImage = styled.ul`
  display: grid;
  text-decoration: none;
  list-style: none;
  max-width: calc(90vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  flex-basis: calc((100% - 90px) / 5);
  grid-gap: 16px;

  margin: 0 auto;

  padding: 0;
`;

export const MoviesImageList = styled.li`
  display: grid;
  justify-content: center;

  background-color: darkred;

  border-radius: 15px;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #531919;
  }
`;

export const MoviesImageImage = styled.img`
  justify-content: center;
  padding: 16px 20px;
  cursor: pointer;
`;

export const CardMoviesItem = styled.div`
  padding: 20px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 0;

  font-size: 20px;
  font-weight: bold;
  color: #e4c9c9;
`;
