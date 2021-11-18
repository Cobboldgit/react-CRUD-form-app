import React, { useEffect } from "react";
import UserInput from "../component/UserInput";
import UserList from "../component/UserList";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import {signOut} from "../actions/authActions"

function Home(props) {

  useEffect(() => {
    getAllUsers();
  }, []);
  
  return (
    <div>
      <button onClick={() => props.signOut()}>Sign Out</button>
      
      <h3>Home</h3>
      <div className="App">
        <div className="container">
          <UserInput />
          <UserList />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getAllUsers,
  signOut
};

export default connect(null, mapDispatchToProps)(Home);
