import React from "react";

import Card from "../UI/Card";
import User from "./User";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
