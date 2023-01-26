// import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ModalContact } from 'components/ModalContact/ModalContact';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Button, Container, Icon, Wrap } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Button type="button" onClick={toggleModal}>
          <Icon />
        </Button>
        <Wrap>
          <Filter />
          {isLoading && !error && (
            <Wrap>
              <b>Request in progress...</b>
            </Wrap>
          )}
          <ContactList />
        </Wrap>
        {openModal && <ModalContact onClose={toggleModal} />}
      </Container>
    </>
  );
}
