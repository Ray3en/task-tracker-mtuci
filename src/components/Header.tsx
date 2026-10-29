

type HeaderProps = {
}

export default function Header({ }: HeaderProps) {

    return (
        <header>
            <h2>Task tracker</h2>
            <label>
                <input
                    type="checkbox"
                    role="switch"
                    // Можно передать состояние темы
                    checked={}
                    // Обработчик события изменения
                    onChange={}
                />
                Темная тема
            </label>
        </header>
    )
}
