import type { Dispatch, SetStateAction } from "react"


type HeaderProps = {
    theme: string,
    setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

export default function Header({ theme, setTheme }: HeaderProps) {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header>
            <h2>Task tracker</h2>
            <label>
                <input
                    type="checkbox"
                    role="switch"
                    // Можно передать состояние темы
                    checked={theme === 'dark'}
                    // Обработчик события изменения
                    onChange={toggleTheme}
                />
                Темная тема
            </label>
        </header>
    )
}
