import { ModalContact } from 'components/ModalContact/ModalContact';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Item, Button, Wrap, IconEdit, IconDelete } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);
  const dispatch = useDispatch();
  return (
    <Item>
      <Wrap>
        <p>{contact.name}:</p>
        <p>{contact.number}</p>
      </Wrap>
      <Wrap>
        <Button type="button" onClick={toggleModal}>
          <IconEdit />
        </Button>

        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <IconDelete />
        </Button>
      </Wrap>
      {openModal && (
        <ModalContact onClose={toggleModal} edit={true} values={contact} />
      )}
    </Item>
  );
};
