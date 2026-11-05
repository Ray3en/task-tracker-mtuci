import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { fetchTodos } from "./api/task.api";
import { TaskContext } from "./context/TaskContext";

export type Task = {
  id: string,
  title: string,
  done: boolean
}


export default function App() {

  const defaultTasks: Task[] = [
    { id: '1', title: 'Title 1', done: true },
    { id: '2', title: 'Title 2', done: false },
    { id: '3', title: 'Title 3', done: true },
  ]

  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [tasks, setTasks] = useState(defaultTasks)


  const addNewTask = (title: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      done: false
    }
    setTasks([...tasks, newTask])
  }

  const handleRemoveTask = (id: string) => {
    const filtered = tasks.filter((task) => task.id !== id)
    setTasks(filtered)
  }

  const handleChangeTask = (id: string) => {
    const changedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(changedTasks)
  }

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
    setStatus('loading');
    try {
      const items = await fetchTodos();
      setTasks(items);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  useEffect(() => {
    load();
  }, []);


  return (
    <TaskContext.Provider value={{handleChangeTask, handleRemoveTask}}>
      <div className="main">
        <Header setTheme={setTheme} theme={theme} />
        <AddForm addNewTask={addNewTask} />
        {status === "success" &&
          <TaskList
            tasks={tasks}
          />
        }
        {status === "loading" &&
          <h2>...</h2>
        }
      </div>
    </TaskContext.Provider>
  )
}