import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (nameInput.current.value.trim().length === 0 || ageInput.current.value === 0) {
      setError({title: 'Invalid input', message: 'Name or Age fields are empty'});
      return;
    }
    if (+ageInput.current.value < 1) {
      setError({title: 'Invalid age', message: 'Please enter a positive age number'});
      return;
    }
    props.onAddUser(nameInput.current.value, ageInput.current.value);
    nameInput.current.value='';
    ageInput.current.value='';
    //setEnteredUsername('');
    //setEnteredAge('');
    /* if (enteredUsername.trim().length === 0 || enteredAge === 0) {
      setError({title: 'Invalid input', message: 'Name or Age fields are empty'});
      return;
    }
    if (+enteredAge < 1) {
      setError({title: 'Invalid age', message: 'Please enter a positive age number'});
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge(''); */
  };

  /*const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
*/
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          //value={enteredUsername}
          //onChange={usernameChangeHandler}
          ref={nameInput}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          //value={enteredAge}
          //onChange={ageChangeHandler}
          ref={ageInput}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
