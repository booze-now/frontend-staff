import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import Users from "../public/Users";

export default function Admin() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth({});
    navigate("/login");
  }

  return (
    <section>
      <h1>Admin Home</h1>
      <Users />
      <br />

      <br />
      <Link to="/employee">Employee</Link>
      <br />
      <Link to="/items">Itemes</Link>
      <br />
      <Link to="/role">User role</Link>
      <br />
      <Link to="/">Home</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
}
