import { useContext, useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { todoItemsContext } from "../store/todo-item-store";
/* eslint-disable react/prop-types */
function AddTodo() {
  let todoName = useRef("");
  let dueDate = useRef("");

  const { addNewItem } = useContext(todoItemsContext);
  const handleAddBtnClick = (e) => {
    e.preventDefault();
    let newItem = {
      todoName: todoName.current.value,
      dueDate: dueDate.current.value,
    };
    addNewItem(newItem);
    todoName.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <form onSubmit={handleAddBtnClick}>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="enter any task" ref={todoName} />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <MdAddToPhotos />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
