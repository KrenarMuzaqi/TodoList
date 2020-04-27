import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("items")) || [];

  const [items, setItems] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Add item
  const addItem = (title) => {
    setItems([...items, { title, id: uuid() }]);
  };

  // Remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Clear items
  const clearItems = () => {
    setItems([]);
  };

  // Find item
  const findItem = (id) => {
    const item = items.find((item) => item.id === id);

    setEditItem(item);
  };

  // Edit Item
  const editListItem = (title, id) => {
    const newItems = items.map((item) =>
      item.id === id ? { title, id } : item
    );

    console.log(newItems);

    setItems(newItems);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        findItem,
        editListItem,
        editItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
