import React from "react";
import "./styles.css";
import CompletedTask from "./CompletedTask";
import Todo from "../model";

interface Props {
  tasks: Todo[];
}

const CompletedTaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="Completed_container">
      <div className="Completed_heading">
        <h3>Completed Tasks</h3>
      </div>
      <div className="Completed_list">
        {/* Completed tasks will be rendered here */}
      </div>
    </div>
  );
};

export default CompletedTaskList;
