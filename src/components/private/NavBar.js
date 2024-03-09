import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";






export default function AdminNavBar() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);



    return (
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/users/employee">Employee</Link>
              </li>
              <li>
                <Link to="/users/user">User</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    );
  }