import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    props.user(data);
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
      <div>{errors?.name?.message}</div>
      <button>{props.textButton}</button>
    </form>
  );
};

export { UserForm };
