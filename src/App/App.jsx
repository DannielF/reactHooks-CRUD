import React from 'react';
import { UserEditForm } from '../components/UserEditForm';
import { UserForm } from '../components/UserForm';
import { UserTable } from '../components/UserTable';
import { UserContext } from '../context/index';

function App() {
  const {
    users,
    addUser,
    deleteUser,
    editing,
    currentUser,
    editRow,
    updateUser,
  } = React.useContext(UserContext);

  return (
    <div className="container">
      <h1>CRUD Api with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <UserEditForm
                actionForm={updateUser}
                textButton="Edit user"
                currentUser={currentUser}
              />
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <UserForm actionForm={addUser} textButton="Add user" />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
