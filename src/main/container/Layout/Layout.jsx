import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/SIdebar/Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
