/* eslint-disable react/prop-types */

import { useContext } from "react";
import { todoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const { todoitems } = useContext(todoItemsContext);
  return (
    todoitems.length === 0 && (
      <p id="wlcmMsg">All things Done, enjoy your day !!!</p>
    )
  );
};

export default WelcomeMessage;
