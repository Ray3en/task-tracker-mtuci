

type TaskItemProps = {
  id: string,
  title: string,
  done: boolean,
  handleRemoveTask: (id: string) => void
}

export default function TaskItem({id, title, done, handleRemoveTask} :TaskItemProps){
  
  const handleRemove = () => {
    handleRemoveTask(id)
  }
  return (
    <div className="todo-item" style={{backgroundColor: (done) ? 'green' : 'red'}}>
      <h2>{title}</h2>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}
