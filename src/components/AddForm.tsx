import type React from "react"


type AddFormProps = {
    addNewTask: (title: string) => void
}

export default function AddForm({ addNewTask }: AddFormProps) {

    const handleAddTask = (event: React.KeyboardEvent<HTMLInputElement>) =>  {
        console.log(event.key)
        if (event.key === 'Enter' && event.currentTarget.value !== ''){
            addNewTask(event.currentTarget.value)
            event.currentTarget.value = ''
        }
    }

    return (
        <div className="add-form">
            <input onKeyDown={handleAddTask}/>
        </div>
    )
}
