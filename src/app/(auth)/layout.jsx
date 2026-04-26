import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
      <ToastContainer />
    </div>
  );
};

export default AuthLayout;
