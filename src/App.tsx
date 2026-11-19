import { useState } from "react";
import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router";
import TodosPage from "./pages/TodosPage";
import ProductDetailPage from "./pages/ProductsDetailPage";
import ProductsPage from "./pages/ProductsPage";
import { DefaultLayout } from "./DefaultLayout";
import { AuthLayout } from "./AuthLayout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={"/"} element={<Navigate to={"/todos"} replace />} />
          <Route path={"todos"} element={<TodosPage />} />
          <Route path={"products"} element={<ProductsPage />} />
          <Route path={"product/:id"} element={<ProductDetailPage />} />
          <Route path={"*"} element={<h2>Not found!</h2>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={"login"} element={<h2>Для авторизации</h2>} />
          <Route path={"register"} element={<h2>Для регистрации</h2>} />
        </Route>
      </Routes>
    </div>
  );
}
