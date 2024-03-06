import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import Users from "../public/Users";
import AdminNavBar from "./NavBar";

export default function EmployeeRegister() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth({});
    navigate("/");
  }
  return (
    <section>
      <h1>Employee Register</h1>
      <br />
      <p>Admins and Editors can hang out here.</p>
      <AdminNavBar />
      <Users />

      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
      </section>
  );
}
