import React, { useState } from 'react';
import UserInput from './component/UserInput';
import UserList from './component/UserList';
import './App.css'
import FuncUserForm from './component/FuncUserForm';
import FuncUserList from './component/FuncUserList';



function App() {
  const [users, setUsers] = useState([])

  function AddUser(user) {
    setUsers([...users, user])
  }
  return (
    <>
    <div className="App">
      <div className="container">
        <UserInput addUser={AddUser}/>
        <UserList data={users}/>
      </div>
    </div>
    </>
  );
}

export default App;
