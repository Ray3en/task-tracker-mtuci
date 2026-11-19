import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


type TaskItemProps = {
  id: number,
  title: string,
  completed: boolean,

}

export default function TaskItem({ id, title, completed }: TaskItemProps) {

  // context переменная потому что вместо объекта может быть null (не безопасно)
  // иначе можно было получить {handleRemoveTask,handleChangeTask}
  const context = useContext(TaskContext)

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    context?.handleRemoveTask(id)
  }

  const handleChange = () => {
     context?.handleChangeTask(id)
  }

  return (
    <div onClick={handleChange} className="todo-item" style={{ backgroundColor: (completed) ? 'green' : 'red' }}>
      <h2>{title}</h2>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}
