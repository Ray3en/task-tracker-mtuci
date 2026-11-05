import type { Task } from "../App"
import TaskItem from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
}


export default function TaskList({tasks}: TaskListProps) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
        />
      ))}
    </div>
  )
}
