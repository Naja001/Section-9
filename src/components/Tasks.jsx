import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
      <NewTask onAddTask={onAdd} onDeleteTask={onDeleteTask} tasks={tasks} />
      {tasks.length === 0 && (
        <p className="text-stone-600 mb-4">
          This project doesn't have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              {task.text}
              <button className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
