/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/todo-item-store";
function TodoItem({ idx, todoitem }) {
  const { todoName, dueDate } = todoitem;
  const { deleteItem } = useContext(todoItemsContext);
  return (
    <div className="row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{dueDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteItem(idx);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
