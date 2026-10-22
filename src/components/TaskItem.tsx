

type TaskItemProps = {
  id: string,
  title: string,
  done: boolean
}

export default function TaskItem({id, title, done} :TaskItemProps){
  return (
    <div>
      <h2>{title}</h2>
      <p>{done + ''}</p>
    </div>
  )
}
