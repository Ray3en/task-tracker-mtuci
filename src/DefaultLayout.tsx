import { Outlet } from "react-router";
import Header from "./components/Header";


export function DefaultLayout() {
  // здесь состояние не нужно - мы его объявили в контексте
  // const [theme, setTheme] = useState<"light" | "dark">("light");


  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
}
