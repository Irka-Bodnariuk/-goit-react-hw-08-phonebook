import { Logout } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        component="span"
        mr={3}
        variant="h6"
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        Welcome, {name}
      </Typography>
      <Button
        onClick={() => dispatch(logOut())}
        sx={{
          color: 'inherit',
          '&:hover': {
            color: 'text.secondary',
          },
        }}
      >
        <Logout />
      </Button>
    </Box>
  );
};
