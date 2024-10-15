import { useContext } from "react";
import { todoItemsContext } from "../store/todo-item-store";
import TodoItem from "./todoItem";
const AddTodoItems = () => {
  const {todoitems} = useContext(todoItemsContext);
  return todoitems.map((todoitem, idx) => (
    <TodoItem key={idx} idx={idx} todoitem={todoitem} />
  ));
};

export default AddTodoItems;
