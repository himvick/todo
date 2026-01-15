import React from "react";
import "./styles.css";
import Todo from "../model";
import SingleTask from "./SingleTask";

interface ActiveTaskListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ActiveTaskList: React.FC<ActiveTaskListProps> = ({ todos, setTodos }) => {
  const deleteTask = (id: number, todos: Todo[]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="Active_container">
      <div className="Active_heading">
        <h3>Active Tasks</h3>
      </div>
      <div className="Active_list">
        {todos &&
          todos.map((todo) => (
            <SingleTask
              key={todo.id}
              todos={todos}
              todo={todo}
              deleteTask={deleteTask}
              setTodos={setTodos}
            />
          ))}
      </div>
    </div>
  );
};

export default ActiveTaskList;
