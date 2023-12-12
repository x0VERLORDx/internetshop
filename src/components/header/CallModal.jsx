import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm, Controller } from 'react-hook-form';
import CallbackModal from './CallbackModal';

import './callmodal.css';


Modal.setAppElement('#root');

const CallModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm();
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);

  const submitHandler = (data) => {
    // Выполняйте дополнительные действия перед отправкой данных, если необходимо
    onSubmit(data);
    onRequestClose();
    setCallbackModalOpen(true);
  };

  const closeCallbackModal = () => {
    setCallbackModalOpen(false);
  };

  return (
    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Call Modal"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h2 className="h2_modal">Замовити зворотній дзвінок</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="modalform">
        <label></label>
        <Controller
          name="name"
          /* className={`modal_input ${errors.firstName ? 'error' : ''} ${field.isValid ? 'valid' : ''}`} */
          control={control}
          defaultValue="" // Установите начальное значение
          rules={{ required: "Введіть ім'я", 
            pattern: {
            value: /^[а-яґєїі-]{2,20}$/i,
            message: "Перевірте правильність набору"
          }
        }}
        render={({ field }) => (
          <input
              className={`modal_input ${errors.firstName ? 'error' : ''} ${isValid ? 'valid' : ''}`}
              placeholder="Тарас"
              {...field}
            />
        )}
        />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Введіть прізвище',
          pattern: {
            //email pattern
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
            message: "Перевірте правильність набору"
          }
         }}
         render={({ field }) => (
          <input
            className={`modal_input ${errors.lastName ? 'error' : ''} ${isValid ? 'valid' : ''}`}
            placeholder="levchienko1998@gmail.com"
            {...field}/>
            )}
            />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

        <label></label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: 'Введіть номер телефону',
          pattern: {
            //remove country code from pattern
            value: /\d{10}$/,
            message: "Перевірте правильність набору"
          } }}
          render={({ field }) => (
            <input
              className={`modal_input ${errors.phoneNumber ? 'error' : ''} ${isValid ? 'valid' : ''}`}
              placeholder="0999105528"
              {...field}
            />
          )}
        />
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}

        <button className="btn_submitcall"  type="submit" >Замовити дзвінок</button>
      </form>
    </Modal>
          {/* Второе модальное окно */}
      <CallbackModal isOpen={callbackModalOpen} onRequestClose={closeCallbackModal} />

    </>
  );
};



export default CallModal;