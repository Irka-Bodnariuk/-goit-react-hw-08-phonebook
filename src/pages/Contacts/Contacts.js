import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ModalContact } from 'components/ModalContact/ModalContact';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Box, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Filter />
      <IconButton
        onClick={toggleModal}
        color="secondary"
        aria-label="add to contact"
      >
        <AddCircleIcon sx={{ fontSize: 60 }} />
      </IconButton>
      <>{isLoading && !error && <b>Request in progress...</b>}</>
      <ContactList />
      {openModal && <ModalContact onClose={toggleModal} />}
    </Box>
  );
}
