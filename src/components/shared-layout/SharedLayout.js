import "./SharedLayout.css";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../loading/Loading";
// import { Dashboard } from "../Dashboard/Dashboard";
//import Navbar from '../header/Header';

const SharedLayout = () => {
  return (
    <div className="container">
       {/* <Navbar /> */}
       {/* <Dashboard /> */}
    <Suspense fallback={null}>
    <Outlet />
    </Suspense>
    </div>
  );
};
export default SharedLayout;
