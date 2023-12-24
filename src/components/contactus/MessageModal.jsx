import React, { useState }  from 'react';
import { useForm, Controller } from 'react-hook-form';

import './messagemodal.css';


const MessageModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSubmitSuccess, setSubmitSuccess] = useState(false);

  const submitHandler = async (data_message) => {
    setSubmitting(true);

    try {
      // Отправка данных на сервер
      const response = await fetch('http://localhost:8080/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_message),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        console.log(data_message);
        console.error('Ошибка при отправке данных на сервер:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  

  const resetForm = () => {
    setSubmitSuccess(false);
    reset();
    onRequestClose(); // Закрыть модальное окно после успешной отправки
    // Сброс формы или другие необходимые действия
  };

  return (
    <div className="messageModal">
      <h2 className="h2_modal">Напишіть нам</h2>{isSubmitSuccess ? (
        <div className="success-message">
          <p className="success-message_text">Ваше повідомлення успішно надіслано!</p>
          <button className="success-message_btn"onClick={resetForm}>OK</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)} className="modalform">
        <label></label>
        {errors.name && <p className="error-message">{errors.name.message}</p>}
        <Controller
          name="name"
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
              className={`modal_input ${errors.name ? 'error' : ''} ${isValid ? 'valid' : ''}`}
              placeholder="Тарас"
              {...field}
            />
        )}
        />
        
        {errors.email && <p className="error-message">{errors.email.message}</p>}
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
            className={`modal_input ${errors.email ? 'error' : ''} ${isValid ? 'valid' : ''}`}
            placeholder="levchienko1998@gmail.com"
            {...field}/>
            )}
            />
       

        <label></label>

        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: 'Введіть номер телефону',
          pattern: {
            //remove country code from pattern
            value: /^\+380\d{9}$/,
            message: "Перевірте правильність набору"
          } }}
          render={({ field }) => (
            <input
              className={`modal_input ${errors.phone ? 'error' : ''} ${isValid ? 'valid' : ''}`}
              placeholder="+380999105528"
              {...field}
            />
          )}
        />

        <label></label>

        {errors.message_people && <p className="error-message">{errors.message_people.message}</p>}
        <Controller
          name="message_people"
          control={control}
          defaultValue=""
          rules={{ required: 'Введіть повідомлення',
          maxLength: {
            value: 300,
            message: 'Повідомлення повинно бути не більше 300 символів',
          } }}
          render={({ field }) => (
            <textarea
              className={`modal_input ${errors.message_people ? 'error' : ''} ${isValid ? 'valid' : ''}`}
              placeholder="Повідомлення"
              {...field}
            />
          )}
        />

<button
            className={`btn_submitcall ${isSubmitting ? 'submitting' : ''}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Відправити'}
          </button>
      </form>
      )}
      </div>
      
  );
};






export default MessageModal;