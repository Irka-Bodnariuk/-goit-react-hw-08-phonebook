import { StyleLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <StyleLink to="/register">Register</StyleLink>
      <StyleLink to="/login">Log In</StyleLink>
    </>
  );
};
