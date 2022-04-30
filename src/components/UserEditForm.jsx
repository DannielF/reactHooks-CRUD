import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserEditForm = ({ actionForm, textButton, currentUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: currentUser,
  });

  // setValue('name', currentUser.name);
  // setValue('username', currentUser.username);

  const onSubmit = (data, e) => {
    actionForm(currentUser.id, data);
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

UserEditForm.propTypes = {
  actionForm: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export { UserEditForm };
