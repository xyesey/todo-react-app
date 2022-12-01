import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    addTodo(text);
    setText("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Add">
          Add
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
