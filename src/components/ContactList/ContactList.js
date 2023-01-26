import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact, editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

import { List, Item, Button, Wrap, Icon } from './ContactList.styled';

export const ContactList = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredPhoneBook = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filteredPhoneBook.map(contact => {
        return (
          <ContactItem key={contact.id} contact={contact} />
          // <Item key={id}>
          //   <Wrap>
          //     <p>{name}:</p>
          //     <p>{number}</p>
          //   </Wrap>
          //   <Wrap>
          //     <Button
          //       type="button"
          //       onClick={() => dispatch(editContact(id, name, number))}
          //     >
          //       <Icon />
          //     </Button>
          //     <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          //       <Icon />
          //     </Button>
          //   </Wrap>
          // </Item>
        );
      })}
    </List>
  );
};
