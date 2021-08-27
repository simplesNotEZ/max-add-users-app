import React, { useState, Fragment, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Don't need if using refs instead
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // Don't need if using refs instead
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(() => {
  //     return event.target.value;
  //   });
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(() => {
  //     return event.target.value;
  //   });
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("addUserHandler. nameInputRef", nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Please enter a valid name.",
      });
      return;
    }
    if (
      enteredUserAge.trim().length === 0 ||
      parseInt(enteredUserAge.trim()) < 1
    ) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age.",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);

    // Direct DOM manipulation with refs to reset input values
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // Don't need if using refs to reset instead
    // setEnteredUsername(() => {
    //   return "";
    // });
    // setEnteredAge(() => {
    //   return "";
    // });
  };

  const cancelModal = () => {
    setError(undefined);
  };

  return (
    <Fragment>
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
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="userAge">Age (Years)</label>
          <input id="userAge" type="number" ref={ageInputRef}></input>
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
