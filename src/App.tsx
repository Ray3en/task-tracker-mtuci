import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

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

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    if (tasks !== null && JSON.parse(tasks).length !== 0) {
      setTasks(JSON.parse(tasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  return (
    <div className="main">
      <Header setTheme={setTheme} theme={theme} />
      <AddForm addNewTask={addNewTask} />
      <TaskList handleRemoveTask={handleRemoveTask} handleChangeTask={handleChangeTask} tasks={tasks} />
    </div>
  )
}