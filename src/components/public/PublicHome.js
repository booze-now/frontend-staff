import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import AdminNavBar from "../private/NavBar";

export default function PublicHome() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    function logout() {
        setAuth({});
        navigate("/");
      }


  return (
    <section>
      <h1>Public Home</h1>
      {<AdminNavBar />}

      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
}
