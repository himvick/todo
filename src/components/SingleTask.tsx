import React, { ReactNode, useState } from "react";
import "./styles.css";
import Todo from "../model";

interface Props {
  todos: Todo[];
  todo: Todo;
  deleteTask: (id: number, todos: Todo[]) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTask: React.FC<Props> = ({ todos, todo, deleteTask, setTodos }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(todo.title);

  const editTask = () => {
    const updatedTodos = todos.map((todoItem) =>
      todoItem.id === todo.id ? { ...todoItem, title: newTitle } : todoItem
    );
    setTodos(updatedTodos);
    setIsEditing(false);
  };
  return (
    <div className="Single_container">
      {isEditing ? (
        <div>
          <input
            value={newTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTitle(e.target.value)
            }
          />
          <button onClick={editTask}>Save</button>
        </div>
      ) : (
        <p className="Single_text">{todo.title}</p>
      )}
      <div className="Single_buttoncontainer">
        <button className="Single_button" onClick={() => setIsEditing(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            viewBox="0 0 640 640"
          >
            <path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
          </svg>
        </button>
        <button
          className="Single_button"
          onClick={() => deleteTask(todo.id, todos)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            viewBox="0 0 640 640"
          >
            <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
          </svg>
        </button>
        <button className="Single_button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            viewBox="0 0 640 640"
          >
            <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
