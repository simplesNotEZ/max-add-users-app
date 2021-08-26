import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  let users = [
    {
      name: "Murphy",
      age: 19,
      id: "user1",
    },
    {
      name: "Marco",
      age: 27,
      id: "user2",
    },
  ];

  const [usersList, setUsersList] = useState(users);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: userName,
          age: userAge,
          id: Math.random(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
