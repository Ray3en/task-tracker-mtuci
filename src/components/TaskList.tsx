import type { Task } from "../App"
import TaskItem from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
  handleRemoveTask: (id: string) => void
}


export default function TaskList({tasks, handleRemoveTask}: TaskListProps) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </div>
  )
}
