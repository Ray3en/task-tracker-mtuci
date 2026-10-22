import TaskList from "./components/TaskList";

export default function App() {
  const name: string = "Анна";
  const count: number = 3;


  // В такс айтем передайте каунт
  return (
    <div>
      <TaskList/>
    </div>
  )
}