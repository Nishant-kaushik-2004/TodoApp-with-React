import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import WelcomeMessage from "./components/WelcomeMessage";
import AddTodoItems from "./components/addTodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/App.css";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="container">
        <Appname />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <AddTodoItems></AddTodoItems>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
