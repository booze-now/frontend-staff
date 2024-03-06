import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import AdminNavBar from "../components/private/NavBar";

export default function LandingPage() {
  const { setAuth } = useContext(AuthContext);


   
return (
   
    <section>
      <h1>BoozeNow</h1>
      { < AdminNavBar />}
    </section>
  );

}
