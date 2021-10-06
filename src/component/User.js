import React, { useState } from "react";
import { Button } from "react-bootstrap";

function User(props) {
  const user = props.user;
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.gen}</h3>
      <Button variant="primary">Edit</Button>
      <Button variant="danger" onClick={() => props.delectUser(user.id)}>
        Delete
      </Button>
    </div>
  );
}

export default User;
