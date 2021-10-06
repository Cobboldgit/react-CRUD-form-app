const initialState = {
  users: [
    {
      name: "Augustine",
      email: "augustine@gmail.com",
      gen: 19,
    },
    {
      name: "Imma",
      email: "imma@gmail.com",
      gen: 19,
    },
    {
      name: "Gab",
      email: "gab@gmail.com",
      gen: 19,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  return state;
};

export default usersReducer;
