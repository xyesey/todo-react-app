// import { CiUndo } from "react-icons/ci"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css"

function TodosAction({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todo" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;
