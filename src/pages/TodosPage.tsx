import { useEffect, useState } from "react";
import { fetchTodos } from "../api/task.api";
import { TaskContext } from "../context/TaskContext";
import AddForm from "../components/AddForm";
import TaskList from "../components/TaskList";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosPage() {
  const baseUrl = import.meta.env.VITE_BASE_API;

  console.log("ENV: =>>>", baseUrl);

  const defaultTasks: Task[] = [
    { id: 1, title: "Title 1", completed: true },
    { id: 2, title: "Title 2", completed: false },
    { id: 3, title: "Title 3", completed: true },
  ];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const addNewTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (id: number) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  const handleChangeTask = (id: number) => {
    const changedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(changedTasks);
  };

  // useEffect(() => {
  //   const tasks = localStorage.getItem('tasks')
  //   if (tasks !== null && JSON.parse(tasks).length !== 0) {
  //     setTasks(JSON.parse(tasks))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks])

  async function load() {
    setStatus("loading");
    try {
      const items = await fetchTodos();
      setTasks(items);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <TaskContext.Provider value={{ handleChangeTask, handleRemoveTask }}>
      <div className="main">
        <AddForm addNewTask={addNewTask} />
        {status === "success" && <TaskList tasks={tasks} />}
        {status === "loading" && <h2>...</h2>}
      </div>
    </TaskContext.Provider>
  );
}
