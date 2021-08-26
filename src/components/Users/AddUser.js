import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(() => {
      return event.target.value;
    });
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(() => {
      return event.target.value;
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("addUserHandler", enteredUsername, enteredAge);
    let errorStatus = false;

    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Please enter a valid name.",
      });
      errorStatus = true;
    }
    if (enteredAge.trim().length === 0 || parseInt(enteredAge.trim()) < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age.",
      });
      errorStatus = true;
    }

    if (!errorStatus) {
      props.onAddUser(enteredUsername, enteredAge);
    }

    setEnteredUsername(() => {
      return "";
    });
    setEnteredAge(() => {
      return "";
    });
  };

  const cancelModal = () => {
    setError(undefined);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          cancelModal={cancelModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="userAge">Age (Years)</label>
          <input
            id="userAge"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
