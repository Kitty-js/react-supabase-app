import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { client } from "../API/client";
import TaskList  from '../components/TaskList';


function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [showTaskDone, setShowTaskDone] = useState(false)
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(taskName)
    setTaskName("");
  }

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="max-w-[400px] bg-slate-200 w-full mx-auto p-8 px-8 rounded-lg">
        <h2 className="text-4x1 dark:text-black font-bold text-center">WRITE A TASK NAME</h2>
        <input
          type="text"
          name="taskName"
          placeholder="Task"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none w-full"
        />
        <button disabled={adding} className="w-full my-5 py-2 bg-violet-500 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-white font-semibold rounded-lg">
          {adding? "Adding..." : "Add"}
        </button>
        <button onClick={() => setShowTaskDone(!showTaskDone)} className="w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 text-white font-semibold rounded-lg">Show task done</button>
        <button onClick={() => client.auth.signOut()} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Logout</button>
      </form>
        <TaskList done={showTaskDone}/>
    </div>
  );
}

export default TaskForm;
