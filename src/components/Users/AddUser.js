import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputref=useRef();
  const ageInputref=useRef();
  const collegeInputref=useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputref.current.value;
    const enteredUserAge=ageInputref.current.value;
    const enteredCollege=collegeInputref.current.value;

    if (enteredCollege.trim().length === 0 || enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, age and college (non-empty values)",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid(>0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge,enteredCollege);
    nameInputref.current.value='';
    ageInputref.current.value='';
    collegeInputref.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputref}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputref}
          />
          <label htmlFor="college">College</label>
          <input
            id="college"
            type="text"
            ref={collegeInputref}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
