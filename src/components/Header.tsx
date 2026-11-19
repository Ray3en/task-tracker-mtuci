import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

type HeaderProps = {};

export default function Header({}: HeaderProps) {

  // Получаем контекст сразу в месте назначения
  //   const toggleTheme = () => {
  //     setTheme(theme === "light" ? "dark" : "light");
  //   };

  // Применяем состояяние и функцйию из ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    // Обратите внимание на приминение theme в классе. Также можно поступить с узлами в других компонентах
    // Проверьте стилизацию в index.css
    <header className={`header header-${theme}`}> 
      <h2>Task tracker</h2>
      <ul
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/products"}>
          <li>Products</li>
        </Link>
        <Link to={"/todos"}>
          <li>Todos</li>
        </Link>
        <Link to={"/login"}>
          <li>Login</li>
        </Link>
      </ul>
      <label>
        <input
          type="checkbox"
          role="switch"
          // Можно передать состояние темы
          checked={theme === "dark"}
          // Обработчик события изменения
          onChange={toggleTheme}
        />
        Темная тема
      </label>
    </header>
  );
}
