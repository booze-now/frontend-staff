import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Navbar } from "react-bootstrap";
import AdminNavBar from "./NavBar";

export default function Home() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  function logout() {
    setAuth({});
    navigate("/");
  }

  return (
    <section>
      <h1>Admin Home</h1>
      <AdminNavBar/>
      <br />

      { < AdminNavBar />}
      <br />
      <Link to="/">Home</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
}
