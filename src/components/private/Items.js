import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

export default function Items() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Items</h1>
      <br />
      <p>Admins and Editors can hang out here.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
}
