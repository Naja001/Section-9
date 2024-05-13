import { useState } from "react";
export default function NewTask({ onAddTask, onDeleteTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleTaskInput(e) {
    setEnteredTask(e.target.value);
  }

  function handleTaskBtn() {
    onAddTask(enteredTask);
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleTaskInput}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleTaskBtn}
      >
        Add Task
      </button>
    </div>
  );
}
