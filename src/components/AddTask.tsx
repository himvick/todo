import React from "react";
import "./styles.css";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  createTask: Function;
}

const AddTask: React.FC<Props> = ({ input, setInput, createTask }) => {
  return (
    <div className="Add_container">
      <input
        className="Add_input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add tasks..."
      />
      <button className="Add_button">Add</button>
    </div>
  );
};

export default AddTask;
