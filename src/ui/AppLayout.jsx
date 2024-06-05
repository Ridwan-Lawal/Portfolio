import { Outlet } from "react-router-dom";
import NavBar from "../features/nav/NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="min-h-screen  overflow-auto app-background font-kumbh">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
