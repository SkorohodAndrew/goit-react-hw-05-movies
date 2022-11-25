import { NavLink } from 'react-router-dom';
import { ButtonList, ButtonType, ButtonNav } from './AppBarStyled';

const navItem = [{ text: 'Home' }, { href: 'movies', text: 'Movies' }];

export const AppBar = () => {
  return (
    <ButtonList>
      {navItem.map(({ href, text }) => (
        <ButtonType>
          <NavLink to={href} key={href}>
            <ButtonNav>{text}</ButtonNav>
          </NavLink>
        </ButtonType>
      ))}
    </ButtonList>
  );
};
