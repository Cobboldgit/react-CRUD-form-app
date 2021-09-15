import React, { Component } from "react";
import User from "./User";

function UserList(props) {
    const users = props.data;
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div>
            <User
              user={user}
              key={user.id}
              delectUser={props.delectUser}
            />
          </div>
        );
      })}
    </div>
  );
}


export default UserList;
