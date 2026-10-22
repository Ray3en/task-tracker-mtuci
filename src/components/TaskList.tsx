import TaskItem from "./TaskItem"

type Task = {
  id: string,
  title: string,
  done: boolean
}
type TaskListProps = {

}


export default function TaskList({ }: TaskListProps) {
  const defaultTasks: Task[] = [
    { id: '1', title: 'Title 1', done: true },
    { id: '2', title: 'Title 2', done: false },
    { id: '3', title: 'Title 3', done: true },
  ]

  return (
    <div>
      {defaultTasks.map((task) => (
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
