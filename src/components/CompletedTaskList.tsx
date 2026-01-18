import React from "react";
import "./styles.css";
import CompletedTask from "./CompletedTask.tsx";
import Todo from "../model";

interface Props {
  tasks: Todo[];
  deleteTask: (id: number) => void;
}

const CompletedTaskList: React.FC<Props> = ({ tasks, deleteTask }) => {
  return (
    <div className="Completed_container">
      <div className="Completed_heading">
        <h3>Completed Tasks</h3>
      </div>
      <div className="Completed_list">
        {tasks.map((task) => (
          <CompletedTask key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskList;
