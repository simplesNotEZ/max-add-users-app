import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    alert("Congrats! you've submitted");
  }
  return (
    <Card>
      <form className={classes.input} onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="userAge">Age (Years)</label>
        <input id="userAge" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>

  );
};

export default AddUser;