/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const todoItemsContext = createContext({
  todoitems: [], // declaring here is not necessary but if we do so then autocomplete will be shown wherever needed
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [...currTodoItems, action.payload];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item, index) => index !== action.payload.idx
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoitems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (newItem) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: newItem,
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (idx) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        idx,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <todoItemsContext.Provider
      value={{
        todoitems, // when key and value both have same name then we can simply use this syntax
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
