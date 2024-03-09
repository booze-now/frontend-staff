import AuthContext from "../../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AdminNavBar from "./NavBar";

export default function UserRoles() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  function logout() {
      setAuth({});
      navigate("/");
    }

  return (
    <section>
      <h1>User Roles</h1>
      <br />
      <AdminNavBar />
      <div className="flexGrow">
      <button onClick={logout}>Sign Out</button>
    </div>
    </section>
  );
}
