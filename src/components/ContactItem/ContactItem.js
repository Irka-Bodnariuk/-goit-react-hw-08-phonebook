import { ModalContact } from 'components/ModalContact/ModalContact';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { styled } from '@mui/material/styles';
import { Box, ListItem, ListItemText, IconButton } from '@mui/material';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const StyledListItem = styled(ListItem)({
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '16px',
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

export const ContactItem = ({ contact }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);
  const dispatch = useDispatch();
  return (
    <StyledListItem
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <AccountBoxIcon
        color="primary"
        sx={{
          mr: 1,
        }}
      />
      <ListItemText>
        {contact.name}: {contact.number}
      </ListItemText>

      <Box>
        <IconButton
          edge="end"
          aria-label="edit"
          type="button"
          onClick={toggleModal}
          sx={{
            mr: 1,
          }}
        >
          <BorderColorIcon />
        </IconButton>

        <IconButton
          edge="end"
          aria-label="delete"
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      {openModal && (
        <ModalContact onClose={toggleModal} edit={true} values={contact} />
      )}
    </StyledListItem>
  );
};
