import { Outlet } from "react-router";
import Navigation from "@/components/Navigation";

function MainLayout() {
  return (
    <>
      <Navigation name="Manupa" />
      <Outlet />
    </>
  );
}

export default MainLayout;
