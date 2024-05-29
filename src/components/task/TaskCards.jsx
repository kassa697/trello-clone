import React from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskButton } from "./button/AddTaskButton";

export const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskButton />
    </div>
  );
};
