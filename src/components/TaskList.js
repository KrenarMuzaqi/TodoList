import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "../components/Task";

const TaskList = () => {
  const { items } = useContext(TaskListContext);

  return (
    <div>
      {items.length ? (
        <ul className="list">
          {items.map((item) => {
            return <Task item={item} key={item.id} />;
          })}
        </ul>
      ) : (
        <div className="no-items">No Items</div>
      )}
    </div>
  );
};
export default TaskList;
