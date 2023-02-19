import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: '10px',
    width: '300px',
  },
  '& .MuiButton-root': {
    margin: '20px',
  },
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <TextField label="Username" type="text" name="name" />
      <TextField label="Email" type="email" name="email" />
      <TextField label="Password" type="password" name="password" />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </StyledForm>
  );
};
