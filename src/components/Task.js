import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ item }) => {
  const { removeItem, findItem } = useContext(TaskListContext);

  return (
    <li className="list-item">
      <span>{item.title}</span>
      <div>
        <button
          className="btn-delete item-btn"
          onClick={() => removeItem(item.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn-edit item-btn" onClick={() => findItem(item.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};
export default Task;
