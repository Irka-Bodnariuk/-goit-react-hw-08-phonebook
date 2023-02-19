import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
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

export const EditForm = ({ onSave, values }) => {
  const { id } = values;
  const [name, setName] = useState(values.name);
  const [number, setNumber] = useState(values.number);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = { id, name, number };
    const notDuplicationName = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    notDuplicationName !== undefined
      ? alert(`"${name}" and "${number}" is already in contacts.`)
      : dispatch(editContact(contact));

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
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <TextField
        label="Number"
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Edit contact
      </Button>
    </StyledForm>
  );
};
