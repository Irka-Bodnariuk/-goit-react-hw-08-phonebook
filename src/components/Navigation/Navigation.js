import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyleLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <StyleLink to="/">Phonebook</StyleLink>
      {isLoggedIn && <StyleLink to="/contacts">Contacts</StyleLink>}
    </nav>
  );
};
