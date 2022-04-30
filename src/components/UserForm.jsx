import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ actionForm, textButton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    actionForm(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register('name', {
          required: { value: true, message: 'Required' },
        })}
      />
      <div>{errors?.name?.message}</div>

      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register('username', {
          required: { value: true, message: 'Required' },
        })}
      />
      <div>{errors?.username?.message}</div>
      <button>{textButton}</button>
    </form>
  );
};

UserForm.propTypes = {
  actionForm: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
};

export { UserForm };
