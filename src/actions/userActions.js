export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add(user)
      .then(
        () => {},
        () => {}
      );
  };
  // return {
  //   type: "ADD_USER",
  //   payload: user,
  // };
};

export const deleteUser = (userId) => {
  return (dispatch, state, { getFirestore }) => {};
  // return {
  //   type: "DELETE_USER",
  //   payload: userId,
  // };
};

export const editUser = (userId, updateUser) => {
  return {
    type: "EDIT_USER",
    payload: { userId, updateUser },
  };
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot((querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => users.push(doc.data()));
        dispatch({
          type: "GET_ALL_USERS",
          payload: users,
        });
      });
  };
};
