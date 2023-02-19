import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { TextField, Button, IconButton, Icon } from '@mui/material';
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

export const ContactForm = ({ onSave }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const {
      elements: {
        name: { value: name },
        number: { value: number },
      },
    } = event.currentTarget;

    const contact = { name, number };

    const notDuplicationName = contacts.find(contact => contact.name === name);
    notDuplicationName !== undefined
      ? alert(`"${name}" is already in contacts.`)
      : dispatch(addContact(contact));

    event.currentTarget.reset();
    onSave();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <IconButton type="button" onClick={onSave}>
        <Icon />
      </IconButton>
      <TextField
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        label="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </StyledForm>
  );
};
