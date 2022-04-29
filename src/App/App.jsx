import React, { useId } from 'react';
import { UserTable } from '../components/UserTable';
import { useLocalStorage } from '../utils/useLocalStorage.js';

function App() {
  const userData = [
    { id: useId(), name: 'John Doe', username: 'jdoe' },
    { id: useId(), name: 'Jane Doe', username: 'jdoe2' },
    { id: useId(), name: 'John Smith', username: 'jsmith' },
  ];

  // hook to use local storage
  const {
    item: users,
    saveItem: saveUsers,
    loading,
    error,
  } = useLocalStorage('users', userData);

  return (
    <div className="container">
      <h1>CRUD Api with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
