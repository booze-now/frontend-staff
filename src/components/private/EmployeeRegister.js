import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

export default function EmployeeRegister() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Employee Register</h1>
      <br />
      <p>Admins and Editors can hang out here.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
}
