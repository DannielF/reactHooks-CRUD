import { UserTable } from '../components/UserTable'

function App() {
  return (
    <div className="container">
      <h1>CRUD Api with hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable/>
        </div>
      </div>
    </div>
  )
}

export default App
