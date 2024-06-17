import React from "react";
import { v4 as uuid } from "uuid";
export const AddTaskButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    // add task card
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item- ${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
