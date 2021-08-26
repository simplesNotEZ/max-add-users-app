import React from "react";

const User = (props) => {
  return (
    <li>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
    </li>
  );
};

export default User;
