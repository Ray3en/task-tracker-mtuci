import { useEffect } from "react"


type TaskItemProps = {
  id: string,
  title: string,
  done: boolean,
  handleRemoveTask: (id: string) => void
  handleChangeTask: (id: string) => void

}

export default function TaskItem({ id, title, done, handleRemoveTask, handleChangeTask }: TaskItemProps) {

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    handleRemoveTask(id)
  }

  const handleChange = () => {
     handleChangeTask(id)
  }

  return (
    <div onClick={handleChange} className="todo-item" style={{ backgroundColor: (done) ? 'green' : 'red' }}>
      <h2>{title}</h2>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}
