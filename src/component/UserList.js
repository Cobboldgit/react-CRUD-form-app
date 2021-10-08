import User from "./User";

function UserList(props) {
    const users = props.data;
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <User
              user={user}
              key={user.id}
              delectUser={props.delectUser}
              editUser={props.editUser}
            />
          </div>
        );
      })}
    </div>
  );
}


export default UserList;
