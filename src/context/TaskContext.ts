import { createContext } from "react";

export type TaskContextValue = {
    handleChangeTask: (id: number) => void
    handleRemoveTask: (id: number) => void
}

export const TaskContext = createContext<TaskContextValue | null>(null)