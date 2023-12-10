import React from 'react';
import Modal from 'react-modal';

import './callbackModal.css';

const CallbackModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Callback Modal"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h2 className="h2_modal">Чудово! Ми незабаром вам передзвонимо.</h2>
      <button className="btn_close" onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};

export default CallbackModal;