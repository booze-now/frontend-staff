import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";


export default function Admin() {
  const navigate = useNavigate();

function logout(){
  localStorage.removeItem("token");
  navigate("/login");
}

  return (
    <section>
      <h1>Admin Home</h1>
      <br />
      <p>You are logged in!</p>
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
