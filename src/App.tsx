import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import ActiveTaskList from "./components/ActiveTaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import Todo from "./model";

function App(): React.ReactElement {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos: string | null = localStorage.getItem("todos");
    const storedCompletedTasks: string | null =
      localStorage.getItem("completedTasks");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    if (storedCompletedTasks) {
      setCompletedTasks(JSON.parse(storedCompletedTasks));
    }
  });

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
    localStorage.setItem("todos", JSON.stringify([...todos, newTask]));
    setInput("");
  };

  const completeTask = (id: number) => {
    const taskToComplete = todos.find((todo) => todo.id === id);
    if (taskToComplete) {
      taskToComplete.completed = true;
      setTodos(todos.filter((todo) => todo.id !== id));
      setCompletedTasks([...completedTasks, taskToComplete]);
    }
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
    localStorage.setItem(
      "completedTasks",
      JSON.stringify([...completedTasks, taskToComplete])
    );
  };

  const deleteTask = (id: number) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(completedTasks.filter((task) => task.id !== id))
    );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTask input={input} setInput={setInput} createTask={createTask} />
      <div className="Tasklists_container">
        <ActiveTaskList
          todos={todos}
          setTodos={setTodos}
          completeTask={completeTask}
        />
        <CompletedTaskList tasks={completedTasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
