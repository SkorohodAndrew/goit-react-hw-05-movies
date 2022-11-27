import { NavLink } from 'react-router-dom';
import { ButtonType, ButtonNav } from './AppBarStyled';

// const navItem = [
//   { text: 'Home', href: '' },
//   { href: 'movies', text: 'Movies' },
// ];

export const AppBar = () => {
  // return (
  //   <ButtonList>
  //     {navItem.map(({ href, text, id }) => (
  //       <ButtonType>
  //         <NavLink to={href} key={id}>
  //           <ButtonNav>{text}</ButtonNav>
  //         </NavLink>
  //       </ButtonType>
  //     ))}
  //   </ButtonList>
  // );

  return (
    <>
      <ButtonType>
        <NavLink to="/" end>
          <ButtonNav>Home</ButtonNav>
        </NavLink>
        <NavLink to="/movies">
          <ButtonNav>Movies</ButtonNav>
        </NavLink>
      </ButtonType>
    </>
  );
};
