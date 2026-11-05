import { useContext, useEffect } from "react"
import { TaskContext } from "../context/TaskContext"


type TaskItemProps = {
  id: string,
  title: string,
  done: boolean,

}

export default function TaskItem({ id, title, done }: TaskItemProps) {

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
    <div onClick={handleChange} className="todo-item" style={{ backgroundColor: (done) ? 'green' : 'red' }}>
      <h2>{title}</h2>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}
