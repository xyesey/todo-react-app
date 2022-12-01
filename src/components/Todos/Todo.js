import { CiViewList, CiTrash, CiCircleCheck } from "react-icons/ci";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <CiViewList className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <CiTrash
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <CiCircleCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
