import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addItem, clearItems, editItem, editListItem } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addItem(title);
      setTitle("");
    } else {
      editListItem(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="item-input"
        value={title}
        placeholder="Add Item..."
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-item-btn">
          {editItem ? "Edit Item" : "Add Item"}
        </button>
        <button className="btn clear-btn" onClick={clearItems}>
          Clear Items
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
