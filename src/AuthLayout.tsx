import { Outlet } from "react-router";


export function AuthLayout(){
    return (
        <div>
            <h1>Страница для авторизации</h1>
            <Outlet/>
        </div>
    )
}