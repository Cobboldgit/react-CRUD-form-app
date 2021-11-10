import React, { useState, useEffect } from "react";
import UserInput from "./component/UserInput";
import UserList from "./component/UserList";
import { connect } from "react-redux";
import { getAllUsers } from "./actions/userActions";
import "./App.css";
// import FuncUserForm from './component/FuncUserForm';
// import FuncUserList from './component/FuncUserList';

function App({getAllUsers}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <div className="App">
        <div className="container">
          <UserInput />
          <UserList />
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  getAllUsers
} 

export default connect(null, mapDispatchToProps)(App);
