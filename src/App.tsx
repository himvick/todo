import React from "react";
import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import ActiveTaskList from "./components/ActiveTaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import Todo from "./model";

function App(): React.ReactElement {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTask = (
    value: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value.length === 0) return;
    const newTask: Todo = {
      id: todos.length,
      title: value,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTask input={input} setInput={setInput} createTask={createTask} />
      <div className="Tasklists_container">
        <ActiveTaskList todos={todos} setTodos={setTodos} />
        <CompletedTaskList />
      </div>
    </div>
  );
}

export default App;
