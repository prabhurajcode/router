import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <div className="nav-container">
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">ALL</Link>
          </li>
          <li
            className={
              location.pathname === "/full_stack_development" ? "active" : ""
            }
          >
            <Link to="/full_stack_development">FULL STACK DEVELOPMENT</Link>
          </li>
          <li className={location.pathname === "/data_science" ? "active" : ""}>
            <Link to="/data_science">DATA SCIENCE</Link>
          </li>
          <li
            className={location.pathname === "/cyber_security" ? "active" : ""}
          >
            <Link to="/cyber_security">CYBERSECURITY</Link>
          </li>
          <li className={location.pathname === "/career" ? "active" : ""}>
            <Link to="/career">CAREERS</Link>
          </li>
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
