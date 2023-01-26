import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import {
  Form,
  Label,
  Input,
  Button,
  Icon,
  ButtonIcon,
} from './ContactForm.styled';

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
    <Form onSubmit={handleSubmit}>
      <ButtonIcon type="button" onClick={onSave}>
        <Icon />
      </ButtonIcon>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
