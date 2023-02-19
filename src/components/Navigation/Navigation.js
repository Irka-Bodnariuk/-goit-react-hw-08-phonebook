import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box component="nav" sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {!isLoggedIn ? (
        <Button
          component={NavLink}
          to="/"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              color: 'text.secondary',
            },
          }}
        >
          Phonebook
        </Button>
      ) : (
        <Typography
          variant="h6"
          component="span"
          sx={{ display: { xs: 'none', md: 'inline-block' } }}
        >
          Phonebook
        </Typography>
      )}
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              color: 'text.secondary',
            },
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
