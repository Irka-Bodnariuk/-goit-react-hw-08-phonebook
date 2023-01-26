import { ContactForm } from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Overlay } from './ModalContact.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalContact = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return onClose();
    }
  };

  return createPortal(
    <Overlay onClick={clickCloseModal}>
      <Modal>
        <ContactForm onSave={onClose} />
      </Modal>
    </Overlay>,
    modalRoot
  );
};
