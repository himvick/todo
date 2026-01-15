import React from "react";
import "./styles.css";
import Todo from "../model";
import SingleTask from "./SingleTask";

interface ActiveTaskListProps {
  todos: Todo[];
}

const ActiveTaskList: React.FC<ActiveTaskListProps> = ({ todos }) => {
  return (
    <div className="Active_container">
      <div className="Active_heading">
        <h3>Active Tasks</h3>
      </div>
      <div className="Active_list">
        {todos &&
          todos.map((todo) => (
            <SingleTask key={todo.id} todos={todos} todo={todo} />
          ))}
      </div>
    </div>
  );
};

export default ActiveTaskList;
