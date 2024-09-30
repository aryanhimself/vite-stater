import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar";

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
