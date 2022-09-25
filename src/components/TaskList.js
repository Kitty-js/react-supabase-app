import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList({ done = false }) {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    getTasks(done);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function renderTasks() {
    if (loading) {
      return (
          <p className="text-4x1 dark:text-white font-bold text-center mt-5">Loading...</p>
      );
    } else if (tasks.length === 0) {
      return (
        <p className="text-4x1 dark:text-white font-bold text-center mt-5">No Tasks Found</p>
      )
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      );
    }
  }
  return <div>{renderTasks()}</div>;
}

export default TaskList;
