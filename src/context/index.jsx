import React from 'react';
import { useLocalStorage } from '../utils/useLocalStorage.js';
import { v4 as uuidv4 } from 'uuid';

const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
  const userData = [
    {
      id: uuidv4(),
      name: 'John Doe',
      username: 'jdoe',
    },
    {
      id: uuidv4(),
      name: 'Jane Doe',
      username: 'jdoe2',
    },
    {
      id: uuidv4(),
      name: 'John Smith',
      username: 'jsmith',
    },
  ];

  // hook to use local storage
  const {
    item: users,
    saveItem: saveUsers,
    loading,
    error,
  } = useLocalStorage('users', userData);

  /**
   * Add an user to the storage
   * @param {*} user
   */
  const addUser = (user) => {
    user.id = uuidv4();
    saveUsers([...users, user]);
  };

  /**
   * Delete an user
   * @param {*} id
   */
  const deleteUser = (id) => {
    saveUsers(users.filter((u) => u.id != id));
  };

  // Edit Users
  const [editing, setEditing] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    id: '',
    name: '',
    username: '',
  });
  /**
   * Set editing to true and set current user
   * @param {*} user
   */
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };
  /**
   * Update an user and save it
   * @param {*} id
   * @param {*} updatedUser
   */
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    saveUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
        editing,
        currentUser,
        editRow,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
