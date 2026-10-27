import { MainLayout } from "./layouts/MainLayouts/MainLayouts";
import { Outlet, ScrollRestoration } from "react-router";


export default function App() {
  return (
    <MainLayout>
      <Outlet />
      <ScrollRestoration />
    </MainLayout>
    )
}
