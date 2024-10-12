import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import './App.css';
import {Provider, useDispatch} from 'react-redux';
import { store } from "./redux/store";
import { addTodo } from "./redux/actions/todosActions";

function App() {
  const dispatch = useDispatch();
  const createTodo = (text) => {
    dispatch(addTodo(text));
  };

  const toggleTodo = (index)=>{
    dispatch(toggleTodo(index));
  }

  return (
    <Provider store={store}>
      <div>
        <h1>To Do App</h1>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList onToggle={toggleTodo} />
      </div>
    </Provider>
  );
}

export default App;
