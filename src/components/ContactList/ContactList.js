import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

import { List } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredPhoneBook = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filteredPhoneBook.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </List>
  );
};
