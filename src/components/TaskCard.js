import { useTasks } from "../context/TaskContext"

function TaskCard({ task }) {
    
    const { deleteTask, updateTask } = useTasks()

    const handleDelete = () => {
        deleteTask(task.id);
    }

    const handleToggleDone = () => {
        updateTask(task.id, {done: !task.done})
    }
  return (
    

<div>
    
<div className="flex justify-center mt-5">
  <div className="block p-10 rounded-lg shadow-lg bg-white max-w-[400px] w-full">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{task.name}</h5>
    <p className="text-gray-700 text-base mb-4">
    {task.done ? "Done ❤️" : "Not Done 💔"}
    </p>
    <div className="py-1">
    <button type="button" onClick={() => handleDelete()} className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out shadow-orange-500/50 hover:shadow-orange-500/40">Delete</button>
    </div>
    <div className="">
    <button onClick={() => handleToggleDone()} className="inline-block px-7 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out shadow-teal-500/50 hover:shadow-teal-500/40">Done</button>

    </div>
  </div>
</div>
</div>
  );
}

export default TaskCard;
